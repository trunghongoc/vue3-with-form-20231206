import { ref, toRefs, watch } from "vue";

import { translate } from "./translate";

export const useGetTagsV1 = (reactiveKeys) => {
  const data = ref<any>(null);
  const success = ref<any>(undefined);
  const error = ref<any>(undefined);
  const loading = ref<boolean>(false);

  // if reactiveKeys changed, will call api to get new data
  watch(reactiveKeys, () => {
    // set loading true, and error = undefined before start API call
    loading.value = true;
    error.value = undefined;
    success.value = undefined;

    // call API
    // fetch(...)

    // if success
    data.value = translate({}); // data.value = translate(response.data)
    success.value = true;

    // if error
    error.value = {}; // error.value = response.error

    // finally set loading flag to false
    loading.value = false;
  });

  // these reactive data can be watch from any where
  return toRefs({
    data,
    success,
    error,
    loading,
  });
};

// export const useGetTagsV2 = ...

export const useGetTags = useGetTagsV1;
