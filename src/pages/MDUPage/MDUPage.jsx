import "./MDUPage.scss";
const MDUPage = () => {
  return (
    <div className="mduPage">
      <div className="pageHeading">
        <p className="helpText">NetExperience Cloud for MDU</p>
        <h1 className="title">Simple, econonomical Tenant Management</h1>
      </div>
      <div className="videoEmbed">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/pBk4NYhWNMM`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      {/* <p>
        The NetExperience cloud management and controller platform incudes
        additional features specifically designed to enable non-technical
        leasing agents and/or property managers to move residents in and out of
        their apartments, automatically configuring their Wi-Fi and assigning
        them a personal area network. In this way the residents have a secure
        network that allows them to access their devices in their home even if
        they are in a common area such as a gym or outside garden. Wall plate
        and ceiling mount access points are readily available from multiple
        manufacturers for easy, low cost deployments.
      </p> */}
      <p className="helpText">Onboard and Remove Tenants</p>
      <p>
        The NetExperience cloud management and controller platform incudes
        additional features specifically designed to enable non-technical
        leasing agents and/or property managers to move residents in and out of
        their apartments, automatically configuring their Wi-Fi and assigning
        them a personal area network.
      </p>
      <p className="helpText">Customize and configure tenant Wi-Fi</p>
      <p>
        MPSK feature (either local or radius based) allows for single SSID with
        multiple paswords.
      </p>
      <p className="helpText">Give tenants access throughout the space</p>
      <p>
        The residents have a secure network with a unique VLAN per reisdent room
        that allows them to access their devices in their home even if they are
        in a common area such as a gym or outside garden.
      </p>
      <p className="helpText">Choose your hardware</p>
      <p>
        Wall plate and ceiling mount access points are readily available from
        multiple manufacturers for easy, low cost deployments.
      </p>
      {/* 
      <p>
        MPSK feature (either local or radius based) allowing for single SSID
        with multiple paswords
      </p>
      <p>
        Unique VLAN per resident room (full privacy with ability to access
        common areas and print to their room printer for example)
      </p> */}
    </div>
  );
};
export default MDUPage;
