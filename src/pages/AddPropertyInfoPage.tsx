import React, { FC, useState } from "react";

// Icons
import { FiInfo } from "react-icons/fi";

// Reusable Components
import InfoRow from "../components/InfoRow";
import PropertyGallery from "../components/PropertyGallery";
import CollapsibleSection from "../components/CollapsibleSection";
import Modal from "../components/Modal";

// Form Components for Modals
import PropertyAddressForm from "../components/forms/PropertyAddressForm";
import LeasingInfoForm from "../components/forms/LeasingInfoForm";
import ChargesForm from "../components/forms/ChargesForm";
import RentFrequencyForm from "../components/forms/RentFrequencyForm";
import ApplicationAgreementForm from "../components/forms/ApplicationAgreementForm";
import AboutPropertyForm from "../components/forms/AboutPropertyForm";
import AmenityForm from "../components/forms/AmenityForm";

const AddPropertyInfoPage: FC = () => {
  // State to manage modal visibility, title, and content
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalFooter, setModalFooter] = useState<React.ReactNode>(null);

  // Function to open the modal with specific content and an optional custom footer
  const openModal = (
    title: string,
    content: React.ReactNode,
    footer?: React.ReactNode
  ) => {
    setModalTitle(title);
    setModalContent(content);
    setModalFooter(footer || null);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Custom footer for the 'Charges' modal
  const chargesModalFooter = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <FiInfo size={20} className="text-[#272B35]" />
        <span className="font-fustat font-semibold text-base text-[#272B35]">
          Type 0 if charges not applicable
        </span>
      </div>
      <button className="px-6 py-3 bg-[#316EED] text-white font-fustat font-bold text-base rounded-xl hover:bg-blue-700">
        Add
      </button>
    </div>
  );

  return (
    <div className="py-8 bg-white">
      <div className="flex flex-col gap-8">
        <h1 className="font-fustat font-bold text-2xl leading-[34px] text-[#272B35]">
          Add Property Information
        </h1>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <InfoRow
              label="Property address"
              status="Required"
              onAdd={() =>
                openModal("Property address", <PropertyAddressForm />)
              }
            />
            <InfoRow
              label="Leasing info"
              status="Required"
              onAdd={() => openModal("Leasing info", <LeasingInfoForm />)}
            />
            <InfoRow
              label="Charges"
              status="Required"
              onAdd={() =>
                openModal("Charges", <ChargesForm />, chargesModalFooter)
              }
            />
            <InfoRow
              label="Rent frequency & payment reminder"
              status="Required"
              onAdd={() =>
                openModal(
                  "Rent frequency & payment reminder",
                  <RentFrequencyForm />
                )
              }
            />
            <InfoRow
              label="Application agreement"
              status="Optional"
              onAdd={() =>
                openModal(
                  "Application agreement(optional)",
                  <ApplicationAgreementForm />
                )
              }
            />
            <InfoRow
              label="About the property"
              status="Optional"
              onAdd={() =>
                openModal("About the property(optional)", <AboutPropertyForm />)
              }
            />
            <InfoRow
              label="Community's amenity/features"
              status="Recommended"
              onAdd={() =>
                openModal("Community's amenity/features", <AmenityForm />)
              }
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <InfoRow
              label="Pet fees"
              status="Optional"
              onAdd={() => alert("Open Pet Fees Modal")}
            />
            <InfoRow
              label="Parking"
              status="Optional"
              onAdd={() => alert("Open Parking Modal")}
            />
            <InfoRow
              label="Nearest educational institution"
              status="Recommended"
              onAdd={() => alert("Open Education Modal")}
            />
            <InfoRow
              label="Nearest stations"
              status="Recommended"
              onAdd={() => alert("Open Stations Modal")}
            />
            <InfoRow
              label="Nearest landmark"
              status="Recommended"
              onAdd={() => alert("Open Landmark Modal")}
            />
            <InfoRow
              label="Utilities provider"
              status="Recommended"
              onAdd={() => alert("Open Utilities Modal")}
            />
          </div>
        </section>

        <section>
          <PropertyGallery />
        </section>

        <section>
          <CollapsibleSection title="Videos (optional)" />
        </section>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        footer={modalFooter}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default AddPropertyInfoPage;
