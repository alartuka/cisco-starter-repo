import React, { Component } from "react";
import "./App.css";
import Banner from "./banner";
import Exhibit from "./exhibit";
import IPAddress from "./ipaddress";
import PacketLatency from "./PacketLatency";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <div className="Exhibits">
          <Exhibit name="Public IPv4 Address">
            <IPAddress ipVersion="ipv4" />
          </Exhibit>
          <Exhibit name="Public IPv6 Address">
            <IPAddress ipVersion="ipv6" />
          </Exhibit>
          <Exhibit name="Packet Latency">
            <PacketLatency />
          </Exhibit>
        </div>
      </div>
    );
  }
}

export default App;
