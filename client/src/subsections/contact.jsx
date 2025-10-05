import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Contact() {
    var myIcon = L.icon({
        iconUrl: '/home.png',
        iconSize: [50, 50],
        iconAnchor: [15, 15],
        popupAnchor: [0, 0]
    });
    useEffect(() => {
        // Initialize map
        const map = L.map("map").setView([56.185863, 10.213092], 13);

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        // Add a marker
        L.marker([56.185863, 10.213092], {icon: myIcon}).addTo(map).bindPopup("Home sweat home!!!  Kongevellen 19, 8240 Risskov");
    }, []);

    return <div>
        <div id="map" className="rounded-4xl mt-7" style={{ height: "400px", width: "100%" }} />;
        <h3 className="text-white text-3xl">Kongevellen 19, 8240 Risskov</h3>
    </div>
}

export default Contact;
