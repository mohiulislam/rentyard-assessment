import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFooter } from "../context/FooterContext";
import { ActionFooter } from "../components/footers/PageFooters";
import SelectionCard from "../components/SelectionCard";
import FormField from "../components/Form/FormField";
import FileUploadField from "../components/Form/FileUploadField";
import SelectDropdown from "../components/Form/SelectDropdown";
import CountryPhoneDropdown from "../components/Form/CountryPhoneDropdown";
import { AiOutlineHome } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoKeyOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { MdOutlineApartment } from "react-icons/md";
import { countryOptions, stateOptions } from "../constants/dropdownOptions";

type UserRole = "Landlord" | "Realtor" | "Property management company";

const PropertySetupPage: FC = () => {
  const navigate = useNavigate();
  const { setFooterActions } = useFooter();
  const [selectedRole, setSelectedRole] = useState<UserRole>("Landlord");

  useEffect(() => {
    setFooterActions(
      <ActionFooter
        onNext={() => navigate("/property-details")}
        nextText="Get started"
      />
    );
    return () => setFooterActions(null);
  }, [setFooterActions, navigate]);

  return (
    <div className="py-8">
      <div className="flex flex-col gap-10 md:gap-14">
        <section className="flex flex-col gap-6">
          <h2 className="font-fustat font-bold text-[24px] leading-[34px] text-[#272B35]">
            Property type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SelectionCard
              icon={<AiOutlineHome size={28} />}
              title="Single House Property"
              description="Single unit house for single family"
            />
            <SelectionCard
              icon={<HiOutlineBuildingOffice2 size={28} />}
              title="Apartments complex"
              description="Multiple unit house for families"
            />
            <SelectionCard
              icon={<BsBuilding size={28} />}
              title="Condominiums"
              description="Multiple unit house for families"
              selected={true}
            />
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-fustat font-bold text-[24px] leading-[34px] text-[#272B35]">
            Select your role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SelectionCard
              icon={<IoKeyOutline size={28} />}
              title="Landlord"
              description="Owner of the property"
              selected={selectedRole === "Landlord"}
              onClick={() => setSelectedRole("Landlord")}
            />
            <SelectionCard
              icon={<RiUserStarLine size={28} />}
              title="Realtor"
              description="Manage property on behalf on owner"
              selected={selectedRole === "Realtor"}
              onClick={() => setSelectedRole("Realtor")}
            />
            <SelectionCard
              icon={<MdOutlineApartment size={28} />}
              title="Property management company"
              description="For management company"
              selected={selectedRole === "Property management company"}
              onClick={() => setSelectedRole("Property management company")}
            />
          </div>
        </section>

        {selectedRole === "Landlord" && (
          <section>
            <div className="border border-[#E0E0E0] rounded-xl bg-white">
              <div className="px-4 py-3.5 bg-[#F4F4F4] border-b border-[#E0E0E0] rounded-t-xl">
                <h3 className="font-fustat font-medium text-lg text-[#6F6C6A]">
                  Proof of ownership
                </h3>
              </div>
              <div className="p-4">
                <FileUploadField label="Ownership doc*" />
              </div>
            </div>
          </section>
        )}

        {selectedRole === "Realtor" && (
          <section>
            <div className="border border-[#E0E0E0] rounded-xl bg-white">
              <div className="px-4 py-3.5 bg-[#F4F4F4] border-b border-[#E0E0E0] rounded-t-xl">
                <h3 className="font-fustat font-medium text-lg text-[#6F6C6A]">
                  Realtor verification
                </h3>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField label="Lenience number*" value="000000000000" />
                <FileUploadField label="Additional documents for realtor" />
                <FileUploadField label="Agreement with landlord*" />
              </div>
            </div>
          </section>
        )}

        {selectedRole === "Property management company" && (
          <section>
            <div className="border border-[#E0E0E0] rounded-xl bg-white">
              <div className="px-4 py-3.5 bg-[#F4F4F4] border-b border-[#E0E0E0] rounded-t-xl">
                <h3 className="font-fustat font-medium text-lg text-[#6F6C6A]">
                  Company & office info
                </h3>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FormField label="Company name*" value="Runyan trade center" />
                <FormField
                  label="Company Identifier(EIN/TIN)*"
                  placeholder="Name"
                />
                <FormField label="Your job title*" value="Manager" />
                <FileUploadField label="Agreement with landlord/owner*" />
                <SelectDropdown
                  label="Country/Region*"
                  options={countryOptions}
                  initialValue="Choose country"
                />
                <FormField label="Street address*" value="111 Austin Ave" />
                <FormField
                  label="Apt, suit, unit (if applicable)"
                  value="3050"
                />
                <CountryPhoneDropdown />
                <FormField
                  label="Contact email*"
                  value="majarul2025@gmail.com"
                />
                <FormField label="City/Town*" value="Dallas" />
                <SelectDropdown
                  label="State/Territory*"
                  options={stateOptions}
                  initialValue="Choose state"
                />
                <FormField label="Zip code*" value="75061" />
              </div>
            </div>
          </section>
        )}

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label
            htmlFor="terms"
            className="font-fustat font-semibold text-base text-[#272B35]"
          >
            Accept RentYard property adding terms & condition
          </label>
        </div>
      </div>
    </div>
  );
};

export default PropertySetupPage;
