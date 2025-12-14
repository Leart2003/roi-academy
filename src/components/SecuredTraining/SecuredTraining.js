import React from 'react';
import './SecuredTraining.css';

const SecuredTraining = () => {
  return (
    <div className="wrapper">
      <div className="card-row">
        <section className="card">
          <h3>Certifikimi</h3>
          <p>
            Pas përfundimit me sukses të programit, pjesëmarrësit pajisen me 6 certifikata, një për secilin modul të përfunduar. Këto certificata janë të njohura në tregun e punës dhe shërbejnë si provë konkrete për aftësitë e fituara gjatë trajnimit. Ato janë të vlefshme në mjediset profesionale.
          </p>
        </section>

        <section className="card">
          <h3>Praktika e garantuar</h3>
          <p>
            Programi përfshin një praktikë të vazhdueshme gjatë të gjithë periudhës së trajnimit, me bashkëpunim me kompani partnere. Pjesëmarrësit punojnë në projekte reale dhe marrin një referencë pune pas përfundimit.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SecuredTraining;