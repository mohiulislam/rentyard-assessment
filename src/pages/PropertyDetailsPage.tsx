import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFooter } from "../context/FooterContext";
import { FiInfo } from "react-icons/fi";
import { ActionFooter } from "../components/footers/PageFooters";
import InfoRow from "../components/InfoRow";
import PropertyGallery from "../components/PropertyGallery";
import CollapsibleSection from "../components/CollapsibleSection";
import Modal from "../components/Modal";
import VideoUpload from "../components/Form/VideoUpload";
import PropertyAddressForm from "../components/forms/PropertyAddressForm";
import LeasingInfoForm from "../components/forms/LeasingInfoForm";
import ChargesForm from "../components/forms/ChargesForm";
import RentFrequencyForm from "../components/forms/RentFrequencyForm";
import ApplicationAgreementForm from "../components/forms/ApplicationAgreementForm";
import AboutPropertyForm from "../components/forms/AboutPropertyForm";
import AmenityForm from "../components/forms/AmenityForm";
import PetFeesForm from "../components/forms/PetFeesForm";
import ParkingForm from "../components/forms/ParkingForm";
import EducationForm from "../components/forms/EducationForm";
import StationsForm from "../components/forms/StationsForm";
import LandmarkForm from "../components/forms/LandmarkForm";
import UtilitiesForm from "../components/forms/UtilitiesForm";

const PropertyDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { setFooterActions } = useFooter();

  useEffect(() => {
    setFooterActions(
      <ActionFooter
        onBack={() => navigate("/")}
        onNext={() => navigate("/pricing")}
        nextText="Next"
      />
    );
    return () => setFooterActions(null);
  }, [setFooterActions, navigate]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalFooter, setModalFooter] = useState<React.ReactNode>(null);

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
  const closeModal = () => setIsModalOpen(false);

  const chargesModalFooter = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <FiInfo size={20} />
        <span className="font-semibold">Type 0 if charges not applicable</span>
      </div>
      <button className="px-6 py-3 bg-[#316EED] text-white font-bold rounded-xl">
        Add
      </button>
    </div>
  );

  return (
    <div className="py-8 bg-white">
      <div className="flex flex-col gap-8">
        <h1 className="font-fustat font-bold text-[24px] leading-[34px] text-[#272B35]">
          Condominiums information
        </h1>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
          <div className="flex flex-col gap-4">
            <InfoRow
              label="Pet fees"
              status="Optional"
              onAdd={() => openModal("Pet fees", <PetFeesForm />)}
            />
            <InfoRow
              label="Parking"
              status="Optional"
              onAdd={() => openModal("Parking", <ParkingForm />)}
            />
            <InfoRow
              label="Nearest educational institution"
              status="Recommended"
              onAdd={() =>
                openModal(
                  "Add nearest educational institution",
                  <EducationForm />
                )
              }
            />
            <InfoRow
              label="Nearest stations"
              status="Recommended"
              onAdd={() => openModal("Add nearest station", <StationsForm />)}
            />
            <InfoRow
              label="Nearest landmark"
              status="Recommended"
              onAdd={() => openModal("Add landmark", <LandmarkForm />)}
            />
            <InfoRow
              label="Utilities provider"
              status="Recommended"
              onAdd={() => openModal("Utilities provider", <UtilitiesForm />)}
            />
          </div>
        </section>
        <section>
          <PropertyGallery />
        </section>
        <section>
          <CollapsibleSection title="Videos (optional)">
            <VideoUpload />
          </CollapsibleSection>
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

export default PropertyDetailsPage;
