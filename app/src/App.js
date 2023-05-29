import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UnAuthenticated from "./pages/UnAuthenticated";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Videos from "./pages/Videos";
import History from "./pages/History";

import { hostUrl, backendUrl } from "./utils/constants";

const getAccountFromCookie = async () => {
    const account = await chrome.cookies.get({
        url: hostUrl,
        name: "zesha_account",
    });

    return account;
};

const getUserById = async (userId) => {
    const response = await fetch(`${backendUrl}/api/users?by=id&id=${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) return null;
    return response.json();
};

function App() {
    const [account, setAccount] = useState(null);
    const [profile, setProfile] = useState(null);
    const [earningHistory, setEarningHistory] = useState([]);

    useEffect(() => {
        // setAccount(
        //     JSON.parse(
        //         '{"name":"oluwafemi alofe","email":"oluwafemialofeuae@gmail.com","profileImage":"https://lh3.googleusercontent.com/a/AAcHTtd8wt_CdGieAazakJwYQTLCz6SHXnWdVfhwl3k=s96-c","idToken":"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRZT2dnXy01RU9FYmxhWS1WVlJZcVZhREFncHRuZktWNDUzNU1aUEMwdzAifQ.eyJpYXQiOjE2ODUxMjU4MTksImF1ZCI6IkJKZ1cydW5iSFhWQ3JSd3ROdG13c19mNGk4WjMyZDFtY200anczcnhhM2llZXJsUU9Yc0FQaEdMOTd5TldqQl9pT2hlV3V4UXRaUVMtVm8zRVFKSGhGdyIsIm5vbmNlIjoiMDMwNTJhZjQzZWMwZTNjYzdhMDI4YjExNWQ2NDI4ZjMwOTRhNjcxMmYzYzRkZTA0ZjBlOWZkODYzYTk0ZjdkYzllIiwiaXNzIjoiaHR0cHM6Ly9hcGkub3BlbmxvZ2luLmNvbSIsIndhbGxldHMiOlt7InB1YmxpY19rZXkiOiIwMjk5NjllMTc0ZmQ4MTRjMDM0MjFhYjQ5ZmRkMDI2NTExYzg1ZGNjMTUwN2E3Y2Q3NWVmZDgyZTY2ZGQzY2FmZGMiLCJ0eXBlIjoid2ViM2F1dGhfYXBwX2tleSIsImN1cnZlIjoic2VjcDI1NmsxIn1dLCJlbWFpbCI6Im9sdXdhZmVtaWFsb2ZldWFlQGdtYWlsLmNvbSIsIm5hbWUiOiJvbHV3YWZlbWkgYWxvZmUiLCJwcm9maWxlSW1hZ2UiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRkOHd0X0NkR2llQWF6YWtKd1lRVExDejZTSFhuV2RWZmh3bDNrPXM5Ni1jIiwidmVyaWZpZXIiOiJ0b3J1cyIsInZlcmlmaWVySWQiOiJvbHV3YWZlbWlhbG9mZXVhZUBnbWFpbC5jb20iLCJhZ2dyZWdhdGVWZXJpZmllciI6InRrZXktZ29vZ2xlLWxyYyIsImV4cCI6MTY4NTIxMjIxOX0.QWnvoveqNuuC3faVFXkkIDhetypxD_tjJJxT_TVQaJ28NUU-kr52h5LXpia-DjHTO2i30VvdMLloMHznQGgi_w","address":"0xd41747fc5DFEb33CCb56607749c6C0fa8f2aA5BF","userType":"VIEWER","userId":"646bb187f6f548df11eb024c"}'
        //     )
        // );

        getAccountFromCookie().then((account) => {
            console.log(account);
            if (account !== null) setAccount(JSON.parse(account.value));
        });
    }, []);

    const getEarningHistory = async () => {
        const res = await fetch(
            `${backendUrl}/api/users/${account.userId}/earnings`
        );

        const data = await res.json();

        if (res.ok) {
            setEarningHistory(data.data);
        }
    };

    const syncAccount = () => {
        getUserById(account.userId).then((user) => {
            if (user !== null) {
                setProfile(user.data);
            }
        });
    };

    useEffect(() => {
        if (account !== null) {
            getUserById(account.userId).then((user) => {
                if (user !== null) {
                    setProfile(user.data);
                }
            });
            getEarningHistory();
        }
    }, [account]);

    return (
        <Router>
            <Routes>
                {profile === null ? (
                    <Route
                        path="*"
                        element={<UnAuthenticated host={hostUrl} />}
                    />
                ) : (
                    <>
                        <Route
                            path="/"
                            element={
                                <Home
                                    account={account}
                                    profile={profile}
                                    earningHistory={earningHistory}
                                />
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <Settings
                                    profile={profile}
                                    syncAccount={syncAccount}
                                />
                            }
                        />
                        <Route
                            path="/videos"
                            element={<Videos account={account} />}
                        />
                        <Route
                            path="/history"
                            element={
                                <History earningHistory={earningHistory} />
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Home
                                    account={account}
                                    profile={profile}
                                    earningHistory={earningHistory}
                                />
                            }
                        />
                    </>
                )}
            </Routes>
        </Router>
    );
}

export default App;
