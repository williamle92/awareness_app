import React from "react";
import firebase from "firebase";
import { EditJournals } from "./EditJournal";
import { CreateLog } from "./CreateLog";
import "firebase/firestore";
import { Grid } from "@material-ui/core";

function DiaryLogs() {
  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore().collection("logs");

    db.onSnapshot((snapshot) => {
      const fetchedEntries = [];

      snapshot.forEach((doc) => {
        fetchedEntries.push({ ...doc.data(), id: doc.id });
      });
      setEntries(fetchedEntries);
    });
  }, []);

  return (
    <div>
      <CreateLog />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >

      {entries.map((entry) => (
          <EditJournals entry={entry} key={entry.id} />
          ))}
          </Grid>
    </div>
  );
}

export default DiaryLogs;
