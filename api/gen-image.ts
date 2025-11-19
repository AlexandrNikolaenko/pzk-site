/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Api from "./api";
import { useState } from "react";

export type GenImage = {
  image: string;
}

export type ErrorLead = {
  success: boolean;
  message: string;
  fields: { name: boolean; phone: boolean };
};

export default function useGenImage({
  onSuccess,
  onError,
}: {
  onSuccess: (result: GenImage) => void;
  onError: (error: ErrorLead) => void;
}) {
  const [data, setData] = useState({data: null, isPending: false, error: null});

  function handleSuccess(result: any) {
    onSuccess(result);
    setData({data: result, isPending: false, error: null});
  }

  function handleError(error: any) {
    onError(error);
    setData({data: null, isPending: false, error})
  }

  function generator(body: FormData) {
    const api = new Api();
    setData({...data, isPending: true});
    api.genImage({ body, onSuccess: handleSuccess, onError: handleError });
  }

  return {data, generator};
}
