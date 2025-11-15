/* eslint-disable @typescript-eslint/no-explicit-any */
import Api from "./api";

export type ErrorLead = {
  success: boolean;
  message: string;
  fields: { name: boolean; phone: boolean };
};

export default function addLead({
  body,
  onSuccess,
  onError,
}: {
  body: { name: string; phone: string };
  onSuccess: () => void;
  onError: (error: ErrorLead) => void;
}) {
  const api = new Api();

  function handleSuccess(data: any) {
    onSuccess();
    console.log(data);
  }

  function handleError(error: any) {
    onError(error);
  }

  api.addLead({ body, onSuccess: handleSuccess, onError: handleError });
}
