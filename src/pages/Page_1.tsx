import React from "react";
import SelectionCard from "../components/SelectionCard"; // Adjust path if needed

// React Icons
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsBuilding } from "react-icons/bs";
import { IoKeyOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { MdOutlineApartment } from "react-icons/md";
import { FiUpload } from "react-icons/fi"; 

// Helper component for a standard form field
const FormField = ({ label, placeholder, value, fullWidth = false }) => (
    <div className={`flex flex-col gap-2.5 ${fullWidth ? 'col-span-full' : ''}`}>
      <label className="font-fustat font-semibold text-base text-[#272B35]">
        {label}
      </label>
      <div className="flex items-center px-4 h-12 border border-[#E0E0E0] rounded-lg bg-white">
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={value}
          className="w-full bg-transparent outline-none font-fustat text-base text-[#6F6C6A]"
        />
      </div>
    </div>
  );
  
  // Helper component for a dropdown/select field
  const Dropdown = ({ label, value }) => (
      <div className="flex flex-col gap-2.5">
          <label className="font-fustat font-semibold text-base text-[#272B35]">
              {label}
          </label>
          <div className="flex items-center justify-between px-4 h-12 border border-[#E0E0E0] rounded-lg bg-white cursor-pointer">
              <span className="font-fustat text-base text-[#6F6C6A]">{value}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 9L12 15L6 9" stroke="#272B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>
      </div>
  );
  
  
  // Helper component for file upload placeholders
  const FileUploadField = ({ label }) => (
      <div className="flex flex-col gap-2.5">
          <label className="font-fustat font-semibold text-base text-[#272B35]">
              {label}
          </label>
          <div className="flex justify-center items-center gap-2.5 h-12 border border-dashed border-[#E0E0E0] rounded-lg bg-[#F6F6F6]">
              <FiUpload className="text-[#272B35]" size={20} />
              <span className="font-fustat font-semibold text-sm text-[#6F6C6A]">
                  (Pdf only)
              </span>
          </div>
      </div>
  );


const Page_1 = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Property Type Section */}
        <section className="flex flex-col gap-6">
          <h2 className="font-fustat font-bold text-2xl leading-[34px] text-[#272B35]">
            Property type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SelectionCard
              icon={<AiOutlineHome size={28} className="text-[#272B35]" />}
              title="Single House Property"
              description="Single unit house for single family"
            />
            <SelectionCard
              icon={
                <HiOutlineBuildingOffice2
                  size={28}
                  className="text-[#272B35]"
                />
              }
              title="Apartments complex"
              description="Multiple unit house for families"
            />
            <SelectionCard
              icon={<BsBuilding size={28} className="text-[#272B35]" />}
              title="Condominiums"
              description="Multiple unit house for families"
            />
          </div>
        </section>

        {/* Select Role Section */}
        <section className="flex flex-col gap-6">
          <h2 className="font-fustat font-bold text-2xl leading-[34px] text-[#272B35]">
            Select your role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SelectionCard
              icon={<IoKeyOutline size={28} className="text-blue-500" />}
              title="Landlord"
              description="Owner of the property"
              selected={true}
            />
            <SelectionCard
              icon={<RiUserStarLine size={28} className="text-[#272B35]" />}
              title="Realtor"
              description="Manage property on behalf on owner"
            />
            <SelectionCard
              icon={<MdOutlineApartment size={28} className="text-[#272B35]" />}
              title="Property management company"
              description="For management company"
            />
          </div>
        </section>

        {/* Proof of Ownership Section */}
        <section className="flex flex-col gap-4">
          <div className="border border-[#E0E0E0] rounded-xl bg-white">
            <div className="px-4 py-3.5 bg-[#F4F4F4] border-b border-[#E0E0E0] rounded-t-xl">
              <h3 className="font-fustat font-medium text-lg leading-[26px] text-[#6F6C6A]">
                Proof of ownership
              </h3>
            </div>
            <div className="p-4 flex flex-col gap-4">
                <FileUploadField label="Ownership doc*" />
            </div>
          </div>
        </section>

        {/* Realtor Verification Section */}
        <section className="flex flex-col gap-4">
            <div className="border border-[#E0E0E0] rounded-xl bg-white">
                <div className="px-4 py-3.5 bg-[#F4F4F4] border-b border-[#E0E0E0] rounded-t-xl">
                    <h3 className="font-fustat font-medium text-lg leading-[26px] text-[#6F6C6A]">
                        Realtor verification
                    </h3>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <FormField label="Lenience number*" value="000000000000"/>
                    <FileUploadField label="Additional documents for realtor" />
                    <FileUploadField label="Agreement with landlord*" />
                </div>
            </div>
        </section>

        {/* Company & office info Section */}
        <section>
            <div className="border border-[#E0E0E0] rounded-xl bg-white">
                <div className="px-4 py-3.5 bg-[#F4F4F4] border-b border-[#E0E0E0] rounded-t-xl">
                    <h3 className="font-fustat font-medium text-lg leading-[26px] text-[#6F6C6A]">
                        Company & office info
                    </h3>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FormField label="Company name*" value="Runyan trade center" />
                    <FormField label="Company Identifier(EIN/TIN)*" placeholder="Name" />
                    <FormField label="Your job title*" value="Manager" />
                    <FileUploadField label="Agreement with landlord/owner*" />
                    
                    <Dropdown label="Country/Region*" value="Choose country" />
                    <FormField label="Street address*" value="111 Austin Ave" />
                    <FormField label="Apt, suit, unit (if applicable)" value="3050" />
                    
                    {/* Phone Number Field */}
                    <div className="flex flex-col gap-2.5">
                        <label className="font-fustat font-semibold text-base text-[#272B35]">Phone number*</label>
                        <div className="flex h-12">
                            <div className="flex items-center justify-center gap-1.5 px-3 border border-r-0 border-[#E0E0E0] rounded-l-lg">
                                <img src="https://flagcdn.com/bd.svg" width="24" alt="Bangladesh Flag" />
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 9L12 15L6 9" stroke="#272B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex items-center px-4 flex-grow border border-[#E0E0E0] rounded-r-lg">
                                <input type="text" defaultValue="+880" className="w-full bg-transparent outline-none font-fustat text-base text-[#6F6C6A]" />
                            </div>
                        </div>
                    </div>
                    
                    <FormField label="Contact email*" value="majarul2025@gmail.com" />
                    <FormField label="City/Town*" value="Dallas" />
                    <Dropdown label="State/Territory*" value="Choose state" />
                    <FormField label="Zip code*" value="75061" />
                </div>
            </div>
        </section>
        
        {/* Terms and Conditions Checkbox */}
        <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="terms" className="font-fustat font-semibold text-base text-[#272B35]">
              Accept RentYard property adding terms & condition
            </label>
        </div>

      </div>
    </div>
  );
};

export default Page_1;