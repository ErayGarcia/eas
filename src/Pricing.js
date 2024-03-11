// Pricing.js
import React from 'react';

const Pricing = () => {
  return (
    <div className="Content">
      <h2 className="SectionTitle">Planes y Precios</h2>
      <div className="PricingPlans">
        <div className="Plan">
          <h3 className="PlanTitle">Plan Básico</h3>
          <p className="PlanDetail">Velocidad de Internet: 25 Mbps</p>
          <p className="PlanDetail">Minutos de llamadas: 100</p>
          <p className="PlanPrice">$29.99/mes</p>
        </div>
        <div className="Plan">
          <h3 className="PlanTitle">Plan Estándar</h3>
          <p className="PlanDetail">Velocidad de Internet: 50 Mbps</p>
          <p className="PlanDetail">Minutos de llamadas: Ilimitadas</p>
          <p className="PlanPrice">$49.99/mes</p>
        </div>
        <div className="Plan">
          <h3 className="PlanTitle">Plan Premium</h3>
          <p className="PlanDetail">Velocidad de Internet: 100 Mbps</p>
          <p className="PlanDetail">Minutos de llamadas: Ilimitadas</p>
          <p className="PlanPrice">$79.99/mes</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

