import React, { useEffect, useMemo, useState } from "react";
import InstalledCard from "../InstalledCard/InstalledCard";
import NoApps from "../NoApps/NoApps";
import Swal from "sweetalert2";

const INSTALLED_KEY = "installedApps";

const InstalledApps = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(INSTALLED_KEY) || "[]");
      setApps(stored);
    } catch (e) {
      setApps([]);
    }
  }, []);

  const sorted = useMemo(() => {
    if (!apps || apps.length === 0) return [];
    const parseDownloads = (val) => {
      if (val == null) return 0;
      if (typeof val === "number") return val;
      const s = String(val).trim().replace(/,/g, "").toUpperCase();
      const match = s.match(/^([0-9]*\.?[0-9]+)\s*([KMB])?$/);
      if (!match) {
        const n = parseFloat(s);
        return Number.isFinite(n) ? n : 0;
      }
      const num = parseFloat(match[1]);
      const suffix = match[2];
      if (!suffix) return num;
      if (suffix === "K") return num * 1e3;
      if (suffix === "M") return num * 1e6;
      if (suffix === "B") return num * 1e9;
      return num;
    };

    const copy = [...apps];
    if (sortOrder === "high-low")
      return copy.sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads),
      );
    if (sortOrder === "low-high")
      return copy.sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads),
      );
    return copy;
  }, [apps, sortOrder]);

  const uninstall = (id) => {
    const remaining = apps.filter((a) => String(a.id) !== String(id));
    setApps(remaining);
    try {
      localStorage.setItem(INSTALLED_KEY, JSON.stringify(remaining));
      Swal.fire({
        title: "Uninstalled",
        text: "App removed from your installations",
        icon: "success",
        timer: 1400,
        showConfirmButton: false,
      });
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Could not update storage",
        icon: "error",
      });
    }
  };

  return (
    <div className="py-10 flex flex-col items-center justify-center gap-5 px-15">
      <h1 className="text-5xl font-bold text-[#001931]">Your Installed Apps</h1>
      <p className="text-sm text-[#627382] mt-2">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="mt-4 flex w-full items-center justify-between ">
        <div>
          <p className="text-[#001931] font-semibold text-xl mt-3 md:mt-0">
            {apps.length} Apps Found
          </p>
        </div>
        <div>
          <label className="mr-3 text-sm">Sort by Downloads</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">None</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        {sorted.length === 0 ? (
          <NoApps />
        ) : (
          <div className="flex flex-col w-screen px-20">
            {sorted.map((app) => (
              <InstalledCard key={app.id} app={app} onUninstall={uninstall} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstalledApps;
