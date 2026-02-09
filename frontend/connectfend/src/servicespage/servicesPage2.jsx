// src/servicespage/servicesPage2.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./services.css";
import img from "../assets/utility.webp";
import bill from "../assets/bill.webp";
import amc from "../assets/amc.webp";
import consult from "../assets/consultancy.webp";
import plc from "../assets/plc.webp";
import dev from "../assets/development.webp";
import ubillDiagram from "../assets/ubill_diagram.png";

export default function ServicesPage2() {

    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const targetId = hash.substring(1);
        const smoothScroll = () => {
            const el = document.getElementById(targetId);
            if (el) {
                // Account for fixed header (70px) + some buffer
                const headerOffset = 90;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            } else {
                setTimeout(smoothScroll, 100);
            }
        };

        setTimeout(smoothScroll, 0);
    }, [hash]);

    return (
        <div className="services-page">

            {/* ======================================================
      Utility Meter Maintenance — Updated with new content
====================================================== */}
            <section id="utility-maintenance" className="umm-wrapper">

                {/* Title */}
                <h2 className="umm-title">Crafting Powerful Product</h2>

                <div className="umm-row">

                    {/* LEFT - Our Offerings Circle with Logo */}
                    <div className="umm-offerings">
                        <div className="offerings-circle">
                            <div className="offerings-icon">⚙️</div>
                            <h3>OUR<br />OFFERINGS</h3>
                        </div>
                    </div>

                    {/* RIGHT - Offerings List */}
                    <div className="umm-offerings-list">
                        <div className="offering-item">UTILITY BILLING – INTEGRATED BILLING MODULE (IBM) - Standalone</div>
                        <div className="offering-item">UTILITY BILLING AS MANAGED SERVICE</div>
                        <div className="offering-item">CENTRALISED MDMS – METER DATA MANAGEMENT SERVICE</div>
                        <div className="offering-item">CONNECTED BUILDINGS – AUTOMATED METER READINGS (AMR)</div>
                        <div className="offering-item">PREPAID BILLING SERVICES</div>
                    </div>

                </div>

                {/* Two Column Layout - Target Customers & Features */}
                <div className="umm-two-cols">

                    {/* Left Column - Target Customers */}
                    <div className="umm-target-box">
                        <div className="target-header">Our one stop billing solutions offer headache free to</div>
                        <ul className="target-list">
                            <li>PROPERTY MANAGEMENT COMPANIES</li>
                            <li>COMMUNITY MANAGEMENT</li>
                            <li>OWNERS ASSOCIATION</li>
                            <li>DEVELOPERS</li>
                            <li>WATER DISTRIBUTION COMPANIES</li>
                        </ul>
                    </div>

                    {/* Right Column - Features */}
                    <div className="umm-features-box">
                        <div className="features-header">Features</div>
                        <ul className="features-list">
                            <li>Customer Management</li>
                            <li>Meter management</li>
                            <li>Automated Meter Reading</li>
                            <li>Bill generation</li>
                            <li>Receipts & collection management</li>
                            <li>Track, control, monitor & recording of Billing data</li>
                            <li>Monthly MIS reports / Account Management</li>
                            <li>Pre-paid billing management</li>
                            <li>Integration API to finance ERP - Oracle / SAP / AX-dynamics...</li>
                        </ul>
                    </div>

                </div>

                {/* Ubill Diagram */}
                <div className="umm-diagram">
                    <img src={ubillDiagram} alt="Ubill Product Suite" className="ubill-diagram-img" />
                </div>

            </section>


            {/* ======================================================
      Billing Managed Service — EXACT SCREENSHOT
====================================================== */}
            <section id="billing" className="billing-wrapper">

                <h2 className="billing-title">Billing Managed Service</h2>

                <div className="billing-row">

                    {/* LEFT TEXT */}
                    <div className="billing-text">
                        <p>
                            A tenant metering provides the overview and insights needed
                            for accurate billing of water and energy consumption in
                            residential and/or commercial buildings. Highly accurate and
                            reliable meters combined with intuitive meter reading, correct
                            billing platform and proper validation of Meter data.
                        </p>

                        <p>
                            ConnectME offers meter maintenance service, to ensure meters stay
                            healthy, critical for correct billing. Our services cover AI enabled
                            AMR application, which validates the meter data on each meter polling
                            and automated meter error reports. We do maintenance service on faulty
                            meters replacements.
                        </p>

                        <p>
                            Our payment portal allows residents to download bills and check their
                            account from the comfort of their own home or anywhere in the world
                            over the internet. Billing system is a combination of software and
                            hardware that receives service usage information, groups this
                            information for specific accounts or customers, produces invoices,
                            creates reports for management, and records (posts) payments made to
                            customer accounts.
                        </p>


                        <div className="onew"><p className="one">
                            After an invoice is generated and dispatched to the customer, ideally,
                            all customers will receive their bills and pay promptly. However, there
                            may be some customers, who do not pay their bills and there may be an
                            unacceptable delay in paying the bill and hence the service providers
                            must take some action needed to remedy the situation and collect the
                            outstanding balance due.
                        </p>

                            <p className="one">
                                Collection is the process of chasing past due receivables on customer
                                account. This usually involves sending notifications to the customer
                                and taking appropriate actions in absence of due payments after the
                                due date.
                            </p></div>
                    </div>


                    {/* RIGHT IMAGE */}
                    <img src={bill} alt="Billing Service" className="billing-img" />

                </div>

            </section>


            {/* ======================================================
      AMC & Training — EXACT SCREENSHOT
====================================================== */}
            <section id="amc" className="amc-wrapper">

                <h2 className="amc-title">AMC & Training</h2>

                <div className="amc-row">

                    {/* LEFT IMAGE */}
                    <img src={amc} alt="AMC Training" className="amc-img" />

                    {/* RIGHT TEXT */}
                    <div className="amc-text">
                        <p>
                            ConnectME provides comprehensive Annual Maintenance Contract (AMC) and professional training services for metering, billing, PLC, SCADA, and automation systems supplied and implemented by us. Our AMC services ensure continuous system performance through preventive maintenance, regular inspections, software updates, and rapid fault resolution. We support both hardware and software platforms to maximize system reliability and operational uptime.
                        </p>

                        <p>
                            In addition, ConnectME delivers structured technical training programs for operators, engineers, and maintenance teams, enabling effective system operation and troubleshooting. Our hands-on training covers system configuration, monitoring, reporting, and best practices. With dedicated support teams and domain expertise, we help clients achieve long-term efficiency, compliance, and return on investment from their automation and monitoring solutions.
                        </p>
                    </div>

                </div>

            </section>


            {/* ======================================================
      Technical Consultancy — EXACT SCREENSHOT MATCH
====================================================== */}
            <section id="consultancy" className="tc-wrapper">

                <h2 className="tc-title">Technical Consultancy</h2>

                <div className="tc-row">

                    {/* LEFT TEXT */}
                    <div className="tc-text">
                        <p>
                            Specialized focusing on everything from market research and strategy
                            consulting to hardware and software specialists to help navigate the
                            minefield of IoT protocols and other technical hurdles to jump through.
                        </p>

                        <p>
                            We offer: Plant Optimization Networking & security Audit trails –
                            Plant / SCADA networks IoT enablement
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <img src={consult} alt="Technical Consultancy" className="tc-img" />

                </div>

            </section>


            {/* ======================================================
      PLC & SCADA Services — EXACT SCREENSHOT MATCH
====================================================== */}
            <section id="plc" className="plc-wrapper">

                <h2 className="plc-title">PLC & SCADA Services</h2>

                <div className="plc-row">

                    {/* LEFT IMAGE */}
                    <img src={plc} alt="PLC & SCADA" className="plc-img" />

                    {/* RIGHT TEXT */}
                    <div className="plc-text">
                        <p>
                            Usage of control systems, such as computers or robots, and information
                            technologies for handling different processes and machineries in an
                            industry to replace a human being. It is the second step beyond
                            mechanization in the scope of industrialization.
                        </p>

                        <p><strong>We offer:</strong></p>

                        <ul className="plc-list">
                            <li>Plant / machine upgrade – retrofits</li>
                            <li>PLC / SCADA / HMI – modifications</li>
                            <li>Maintenance contracts – AMC / SLA</li>
                            <li>Engineering Services</li>
                            <li>Manpower deployment – Engineers / Project Manager</li>
                        </ul>
                    </div>

                </div>

            </section>


            {/* ======================================================
      Development & Services — EXACT SCREENSHOT MATCH
====================================================== */}
            <section id="development" className="dev-wrapper">

                <h2 className="dev-title">Development & Services</h2>

                <div className="dev-row">

                    {/* LEFT TEXT BLOCK */}
                    <div className="dev-text">
                        <p>
                            Application development services allow you to build consumer-facing
                            apps for a range of digital platforms like mobile App, web, desktop.
                            Web development services imply designing, building, integrating,
                            scaling and maintaining dynamic software solutions that work via
                            intranet or internet.
                        </p>

                        <p>
                            We rely on our technological expertise and specialized industry
                            experience to develop any type of web, mobile App, desktop, and
                            hybrid app per your business requirements. Our application
                            maintenance and modernization services are designed to ensure the
                            scalability, performance, and sustainability of your entire software
                            infrastructure as your business grows.
                        </p>

                        <p>
                            Our thorough threat audits help us identify your software
                            infrastructure’s most pressing vulnerabilities, allowing us to
                            integrate the encryptions, security services and access protocols you
                            require. Our implementation specialists will work with your IT team
                            to establish detailed software deployment objectives and timelines,
                            covering configuration, testing, project governance, troubleshooting
                            and more. We provide holistic IT Infrastructure support, including
                            help desk management, custom messaging and collaboration, network
                            management and system administration services.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <img src={dev} alt="Development Services" className="dev-img" />

                </div>

            </section>

        </div>
    );
}
