interface SList {
  [key: string]: string;
}

const strings: SList = {
  elt1Desc:
    "eLT1 è una piattaforma e-Learning realizzata interamente da me per il corso Lingua Tedesca I dell'Univeristà di Trento. Ha un traffico di circa 100 persone ogni semestre e viene utilizzato quotidianamente. Viene servito da Django con un frontend scritto con React. Area utente visualizzabile su richiesta.",
  etonDesc:
    "Parte dell'esperienza Erasmus a Francoforte è stato lo sviluppo di un Corpus (database linguistico con funzioni di querying) per la lingua Africana Eton. Il progetto, non più attivo, è stato utilizzato per due semestri in cui lo studio della Lingua è stato proposto alla medesima università.",
  etonPLus:
    "Il progetto operava con backend Django e sfruttava la generazione server-side di HTML, con presenza ristretta di JavaScript.",
  mobilityDesc:
    "Impiego part-time volto a fornire assistenza a studenti disabili dell'Università nel muoversi in città.",
  libraryDesc:
    "Volontariato a lungo termine presso la Biblioteca Comunale con un vasto numero di incarichi, quali la estensione del sistema digitale di gestione, sistemazione e organizzazione del materiale librario, editing e impaginazione dei numeri del giornale mensile del Comune di Badia Calavena.",
};

export default strings;
