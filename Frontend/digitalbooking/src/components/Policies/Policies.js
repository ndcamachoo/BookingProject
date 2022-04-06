import React from 'react'
import styles from './Policies.module.css'

export const Policies = (props) => {
    const {rules, rulesInfo, houseRules, healthSecurity,cancellation} = styles;
   const {hrules, health, cancel} = props;
    console.log(hrules);
    return (
        <section className={rules}>
          <h4>Qué tenés que saber</h4>
          <hr/>
          <div className={rulesInfo}>
            <div className={houseRules}>
              <h4>Normas de la casa</h4>
              <ul>
                {hrules && hrules.split(",").map((rule)=><li>{rule}</li> )}
              </ul>
            </div>
            <div className={healthSecurity}>
              <h4>Salud y seguridad</h4>
              <ul>
                {health && health.split(",").map((rule)=><li>{rule}</li> )}
              </ul>
            </div>
            <div className={cancellation}>
              <h4>Política de cancelación</h4>
              <ul>
              {cancel && cancel.split(",").map((rule)=><li>{rule}</li> )}
                <li>Los pagos con tarjeta de crédito son reembolsables.</li>
              </ul>
            </div>
          </div>
        </section>
    )
}
