import { useEffect, useState } from "react";

import axios from "../helper/axios";
import GroupItem from "./GroupItem";

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get("/groups")
      .then((resp) => {
        setGroups(resp.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return groups.map((group, idx) => <GroupItem group={group} key={idx} />);
};
export default GroupList;
