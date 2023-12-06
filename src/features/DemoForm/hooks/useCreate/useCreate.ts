import { ref, toRefs } from "vue";

import { translate } from "./translate";
import { map } from "./map";

export const useCreateV1 = () => {
  const data = ref<any>(null);
  const success = ref<any>(undefined);
  const error = ref<any>(undefined);
  const loading = ref<boolean>(false);

  // call API for saving to Database
  const mutate = (
    payload: any,
    options?: {
      onSuccess: (data) => void;
      onError: (error) => void;
    }
  ) => {
    // set loading true, and error = undefined before start API call
    loading.value = true;
    error.value = undefined;
    success.value = undefined;

    // create payload before start API call
    const mappedPayload = map(payload);

    // call API
    // fetch(..., {mappedPayload})

    // if success
    data.value = translate({}); // data.value = translate(response.data)
    success.value = true;
    options?.onSuccess?.(data.value);

    // if error
    error.value = {}; // error.value = response.error
    options?.onSuccess?.(error);

    // finally set loading flag to false
    loading.value = false;
  };

  // these reactive data can be watch from any where
  return toRefs({
    data,
    success,
    error,
    loading,
    mutate,
  });
};

// export const useCreateV2 ...

export const useCreate = useCreateV1;
