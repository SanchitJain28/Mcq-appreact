import logo from './logo.svg';
import './App.css';
import Questions from './Components/Questions';
import { useContext, useState } from 'react';
import {mycontext, ResultContext} from '../src/Contexts/ResultContext'
import { LaudaProvider } from './Contexts/LaudaContext';
import { QuestionContext ,testquestions} from './Contexts/QuestionContext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Results from './Components/Results';
import Homepage from './Components/Homepage';
import SelectYourAge from './Components/SelectYourAge';
import Auth from './Components/Auth';
import { LoginandDatacontext } from './Contexts/LoginandDatacontext';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Homepage/>
      </>,
    },
    {
      path: "/result",
      element: <>
      <Results/>
      </>,
    },
    {
      path:'questions',
      element:<>
      <Questions/>
      </>
    },
    {
      path: "/age",
      element: <>
      <SelectYourAge/>
      </>,
    },
    {
      path: "/auth",
      element: <>
      <Auth/>
      </>,
    }
  ]);

  return (
    <div className="App">
      <ResultContext>
      <LoginandDatacontext>
      <QuestionContext>
<LaudaProvider>
    <RouterProvider router={router} />
</LaudaProvider>
</QuestionContext>
</LoginandDatacontext>
</ResultContext>

    </div>
  );
}

export default App;
