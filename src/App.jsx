
import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Why from './components/Why/Why';
import What from './components/What/What';
import ProblemSolution from './components/ProblemSolution/ProblemSolution';
import SocialProof from './components/SocialProof/SocialProof';
import Program from './components/Program/Program';
import Contacts from './components/Contacts/Contacts';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Success from './components/Success/Success';

function App() {
  const [registered, setRegistered] = useState(false);

    function scrollToForm() {
      window.location.hash = '#register';
      setTimeout(() => {
        const el = document.getElementById('register');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    return (
      <>
        <Hero onRegister={scrollToForm} />
        <Why />
        <What />
        <ProblemSolution />
        <SocialProof />
        <Program />
        {!registered ? (
          <RegistrationForm onSuccess={() => setRegistered(true)} />
        ) : (
          <Success />
        )}
        <Contacts />
      </>
    );
}

export default App
