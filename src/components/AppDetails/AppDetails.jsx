import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useFetchApp from "../../Hooks/useFetchApps";
import AppDetailsComponent from "../AppDetailsComponent/AppDetailsComponent";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const AppDetails = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { id } = useParams();
  const { apps, loading, error } = useFetchApp();

  const app = apps.find((a) => String(a.id) === String(id));

  const INSTALLED_KEY = "installedApps";

  useEffect(() => {
    try {
      const installed = JSON.parse(localStorage.getItem(INSTALLED_KEY) || "[]");
      const exists = installed.find((a) => String(a.id) === String(id));
      if (exists) setIsClicked(true);
    } catch (e) {
      //nothing
    }
  }, [id]);

  const handleInstall = () => {
    if (!app) return;

    try {
      const installed = JSON.parse(localStorage.getItem(INSTALLED_KEY) || "[]");
      const exists = installed.find((a) => String(a.id) === String(app.id));
      if (!exists) {
        installed.push(app);
        localStorage.setItem(INSTALLED_KEY, JSON.stringify(installed));
      }
      setIsClicked(true);
      Swal.fire({
        title: "This app is installed!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        title: "Install failed",
        text: err.message || "Could not save to storage",
        icon: "error",
      });
    }
  };

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : error || apps.length <= 0 ? (
        <Error></Error>
      ) : (
        <AppDetailsComponent
          app={app}
          handleInstall={handleInstall}
          isClicked={isClicked}
        ></AppDetailsComponent>
      )}
    </div>
  );
};

export default AppDetails;
