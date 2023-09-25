import "./MDUPage.scss";
import { MDUBenefit } from "../../components";
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
      <div className="MDUPoints">
        <p className="helpText">Onboard and Remove Tenants</p>
        <p>
          The NetExperience cloud management and controller platform incudes
          additional features specifically designed to enable non-technical
          leasing agents and/or property managers to move residents in and out
          of their apartments, automatically configuring their Wi-Fi and
          assigning them a personal area network.
        </p>
        <p className="helpText">Customize and configure tenant Wi-Fi</p>
        <p>
          MPSK feature (either local or radius based) allows for single SSID
          with multiple paswords.
        </p>
        <p className="helpText">Give tenants access throughout the space</p>
        <p>
          The residents have a secure network with a unique VLAN per reisdent
          room that allows them to access their devices in their home even if
          they are in a common area such as a gym or outside garden.
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
      <div className="statisticPanel">
        <p className="stat">
          31% of the US population lives in MDUs, 50% report Wi-Fi issues
        </p>
        <p className="statAuthor">Parks Associates, 2023</p>
      </div>
      <div className="MDUBenefits">
        <MDUBenefit
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-houses-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.51 2.51 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354L7.207 1Z" />
              <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Z" />
            </svg>
          }
          title="Scalablity"
          benefits={[
            "Multi-tenant, innovative location-based hierarchy",
            "Multi-role, service provider, customer, property manager",
            "Multi-use case",
            "Multi-vendor",
          ]}
        />
        <MDUBenefit
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-file-earmark-code-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z" />
            </svg>
          }
          title="Technology"
          benefits={[
            "Containerized Elastic Micro Services",
            "Webhooks",
            "APIs",
          ]}
        />
        <MDUBenefit
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-stack"
              viewBox="0 0 16 16"
            >
              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
            </svg>
          }
          title="Integration"
          benefits={[
            "Saas or License",
            "OpenRoaming and passpoint enabled",
            "Customized integration",
          ]}
        />
      </div>
    </div>
  );
};
export default MDUPage;
