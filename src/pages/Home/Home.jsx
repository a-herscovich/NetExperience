import { DoubleRightOutlined } from "@ant-design/icons";
import "./Home.scss";
import {
  EmailInput,
  Slideshow,
  TwoPanelCustomerInfo,
  OpenWifiBenefit,
  Carousel
} from "../../components";

const Home = () => {
  return (
    <div className="home">
      <div className="twoPanels taglineSection">
        <div className="taglineAndCTA">
          <div className="openWifiButton" onClick={() => console.log("todo")}>
            <span>Open Wifi Story</span>
            <span className="openWifiIcon">
              <DoubleRightOutlined />
            </span>
          </div>
          <h1 className="tagline">Bold tagline text spanning a few lines</h1>
          <p className="supportText">
            Supporting text more descriptive spanning a couple of lines. This is
            some more placeholder text to see the text wrap.
          </p>
          <EmailInput />
        </div>
        <div className="scrollingImages">
          <Slideshow />
        </div>
      </div>
      <div className="customerSection">
        <TwoPanelCustomerInfo
          title="Multiple Dwelling Units (MDU)"
          description="The NetExperience cloud management and controller platform incudes additional features specifically
          designed to enable non-technical leasing agents and/or property managers to manage tenant Wi-Fi"
          image="/apartment2.png"
          cta="See our cloud management platform"
        />
        <TwoPanelCustomerInfo
          title="Hospitality"
          description="External captive portal integrations support and guests connect automatically and securely to Wifi."
          image="/hotel1.png"
          reverse
          cta="Manage your guests' connections"
        />
        <TwoPanelCustomerInfo
          title="Education"
          description="WiFi6 and WiFi6E wall plate, ceiling mount and outdoor Access Points are available from multiple
          manufacturers suitable for high density campus deployments, all managed within NetExperience's School Management Platform"
          image="/university1.png"
          cta="Equip your students with Wi-Fi across campus"
        />
        <p className="customerSegmentHelperText">
          NetExperience serves multiple industries today, and is expanding
          rapidly. Don’t see your use case? Reach out and we can discuss.
        </p>
      </div>
      <div className="openWifiSection">
        <div className="openWifiSectionHeader">
          <h1 className="openWifiSectionHeader">Why OpenWifi</h1>
          <p>
            Learn about the technology powering NetExperience and advancing the
            Wifi industry. Here's what our experts are saying:
          </p>
        </div>
        <Carousel />
        <div className="benefits">
          <OpenWifiBenefit
            icon={
              <svg
                className="benefitIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cash-coin"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
              </svg>
            }
            title="50% decrease in TCO"
            description="Total Cost of Ownership... more text"
          />
          <OpenWifiBenefit
            icon={
              <svg
                className="benefitIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-router"
                viewBox="0 0 16 16"
              >
                <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707Z" />
                <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z" />
                <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h13Z" />
                <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              </svg>
            }
            title="Disaggregation - compatiblity with multiple hardware providers"
            description="For improved customer experience and supply chain resiliency, preventing vendor lock"
          />
          <OpenWifiBenefit
            icon={
              <svg
                className="benefitIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-globe2"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
              </svg>
            }
            title="Scalable to millions of APs and Switches"
            description="Scalability text"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
