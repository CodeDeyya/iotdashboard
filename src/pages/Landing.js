import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import Counter from "../components/Counter.js";
import Chart from "../components/Chart.js";
import Grid from "@material-ui/core/Grid";
import { useFetch } from "../axios/axios.js";

function Landing(props) {
  const [operational, setOperational] = useState(0);
  const [nonOperational, setNonOperational] = useState(0);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //async function to load and update data
    const update = async () => {
      const res = await useFetch.get("api/equipment");
      const timer = setTimeout(() => {
        setLoading(false);
        setOperational(res.data.Operational);
        setNonOperational(res.data.NonOperational);
        setCategory(res.data.EquipmentList);
      }, 1000);
    };

    try {
      //initial update data
      update();
      //reload data every minute
      setInterval(async () => {
        setLoading(true);
        update();
      }, 60000);
    } catch (e) {
      alert("Could not Load Data " + e);
    }
  }, []);

  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Counter
            category="Operational"
            count={operational}
            loading={loading}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Counter
            category="Non-Operational"
            count={nonOperational}
            loading={loading}
          />
        </Grid>
      </Grid>
      <Chart data={category} loading={loading} />
    </div>
  );
}

export default Landing;
