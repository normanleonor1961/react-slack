import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login";
import { auth } from "./firebase";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt="slack logo"
          />
          <Spinner name="ball-spin-fade-loader" color="red" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <BrowserRouter>
      {user ? (
        <div className="App">
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </div>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
