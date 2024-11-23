/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "../ui/sharedComponents/DataTable";
import { SideSheet } from "../ui/sharedComponents/SideSheet";
// import hook
import useCustomerTable from "./Hooks/useCustomerTable";
import useAddEditCustomers from "./Hooks/useAdd-EditCustomers";
import ReactLoader from "../../components/ui/sharedComponents/ReactLoader";
import AlertBox from "../ui/sharedComponents/AlertBox";
// Import toaster for success or error msg popup
import { Toaster } from "react-hot-toast";

export default function Customers() {
  const {
    columns,
    data,
    dynamicFormSchema,
    loading,
    showAlert,
    setShowAlert,
    handleAgreeDelete,
  } = useCustomerTable();
  const { handleCustomerAddSubmit, buttonLoader } = useAddEditCustomers();

  return (
    <>
      <div className="container mx-auto py-10 flex flex-col">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="grid gap-4 grid-cols-2 px-2">
          <ReactLoader loading={loading} />
          <div>
            <p className="mb-5 text-lg font-bold uppercase">Our Customers</p>
          </div>
          {/* Div for side short form */}
          <div className="mb-5 flex justify-end">
            <SideSheet
              formGenSchema={dynamicFormSchema}
              onSubmit={handleCustomerAddSubmit}
              buttonLoader={buttonLoader}
            />
          </div>
        </div>
        <hr />
        {/* Div for data table */}
        <div className="row mt-2 pr-4">
          <DataTable columns={columns} data={data as any} />
        </div>

        {/* Alert popup for delet action */}
        {showAlert && (
          <AlertBox
            title="Delete Alert!!"
            description="Are you sure to delete this record?"
            onAgreeFn={handleAgreeDelete}
            open={showAlert}
            setOpen={setShowAlert}
          />
        )}
      </div>
    </>
  );
}