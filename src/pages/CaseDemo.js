import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Demo Components
import TheOfficeDemo from './demos/TheOfficeDemo';
import RestaurantDemo from './demos/RestaurantDemo';
import FitnessAppDemo from './demos/FitnessAppDemo';
import WebshopDemo from './demos/WebshopDemo';
import BoligportalDemo from './demos/BoligportalDemo';
import KlinikAppDemo from './demos/KlinikAppDemo';

const demos = {
  'the-office': TheOfficeDemo,
  'restaurant-case': RestaurantDemo,
  'fitness-app': FitnessAppDemo,
  'webshop-case': WebshopDemo,
  'bolig-case': BoligportalDemo,
  'klinik-app': KlinikAppDemo
};

function CaseDemo() {
  const { caseId } = useParams();
  const DemoComponent = demos[caseId];

  if (!DemoComponent) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f172a',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Demo ikke fundet</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Denne demo findes ikke.</p>
        <Link
          to="/cases"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#14b8a6',
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none'
          }}
        >
          Tilbage til Cases
        </Link>
      </div>
    );
  }

  return <DemoComponent />;
}

export default CaseDemo;
