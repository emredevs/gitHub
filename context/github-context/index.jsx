"use client";
const { createContext, useState } = require("react");

const GitHubContext = createContext();

export function GitHubContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [gitRepo, setGitRepo] = useState([]);
  const values = { setGitRepo, setUser, setUserInfo, user, userInfo, gitRepo };
  return (
    <GitHubContext.Provider value={values}>{children}</GitHubContext.Provider>
  );
}
export default GitHubContext;
