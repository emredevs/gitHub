import UserForm from "@/components/user-form";
import React from "react";
import { GitHubContextProvider } from "../../context/github-context";
import UserInfo from "@/components/user-info";
import UserRepo from "@/components/user-repo";
import GithubContainer from "../github-container";
export default function HomeContainer({ params }) {
  return (
    <div>
      <GitHubContextProvider>
        <UserForm params={params} />
        <GithubContainer />
      </GitHubContextProvider>
    </div>
  );
}
