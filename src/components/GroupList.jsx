import { useEffect, useState } from "react";

import axios from "../helper/axios";
import GroupItem from "./GroupItem";
import GroupCreator from "./GroupCreator";
import Loader from "../components/Loader";

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/groups")
      .then((resp) => {
        setLoading(false);

        setGroups(resp.data);
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  }, []);

  const addNewGroup = ({ group }) => {
    setGroups([group, ...groups]);
  };

  return (
    <>
      {loading ? <Loader /> : null}

      <div className="py-4">
        <GroupCreator afterCreated={addNewGroup} />
      </div>

      {loading ? null : groups.length <= 0 ? (
        <div>
          <h3>Make Your first Group (:-</h3>
          <p className="lead">
            You don't have any group right now. At first you need to create a
            group or wait for someone to add you to their group.
          </p>
        </div>
      ) : null}

      {groups.map((group, idx) => (
        <GroupItem group={group} key={idx} />
      ))}
    </>
  );
};

export default GroupList;
