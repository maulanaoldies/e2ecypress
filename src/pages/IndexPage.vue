<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 400px">
      <q-form
        class="q-gutter-md"
        @submit.prevent.stop="onSubmit"
        @reset.prevent.stop="onReset"
        greedy
      >
        <q-input
          ref="nikRef"
          outlined
          label="NIK"
          mask="################"
          v-model="nik"
          no-error-icon
          data-cy="input-nik"
          :error="nikError.error"
        >
          <template v-slot:error>
            <div class="error-slot" data-cy="error-nik">
              {{ nikError.message }}
            </div>
          </template>
        </q-input>
        <q-input
          ref="nameRef"
          outlined
          label="Nama Lengkap"
          v-model="name"
          no-error-icon
          data-cy="input-name"
          :error="nameError.error"
        >
          <template v-slot:error>
            <div class="error-slot" data-cy="error-name">
              {{ nameError.message }}
            </div>
          </template>
        </q-input>
        <q-input
          ref="ageRef"
          outlined
          label="Usia"
          type="number"
          v-model="age"
          no-error-icon
          data-cy="input-age"
          :error="ageError.error"
        >
          <template v-slot:error>
            <div class="error-slot" data-cy="error-age">
              {{ ageError.message }}
            </div>
          </template>
        </q-input>
        <div>
          <q-btn
            no-caps
            unelevated
            label="Submit"
            type="submit"
            class="full-width"
            color="primary"
            data-cy="submit"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const $q = useQuasar();

    const nik = ref(null);
    const nikError = ref({
      error: false,
      message: null,
    });
    const name = ref(null);
    const nameError = ref({
      error: false,
      message: null,
    });
    const age = ref(null);
    const ageError = ref({
      error: false,
      message: null,
    });

    return {
      nik,
      nikError,
      name,
      nameError,
      age,
      ageError,

      onSubmit() {
        if (nik.value && nik.value.length > 0) {
          console.log("nik True");
        } else {
          nikError.value = {
            error: true,
            message: "Please type something",
          };
        }

        if (name.value && name.value.length > 0) {
          console.log("nik True");
        } else {
          nameError.value = {
            error: true,
            message: "Please type something",
          };
        }

        if (age.value && age.value.length > 0) {
          console.log("nik True");
        } else {
          ageError.value = {
            error: true,
            message: "Please type something",
          };
        }

        // if (
        //   nikRef.value.hasError ||
        //   nameRef.value.hasError ||
        //   ageRef.value.hasError
        // ) {
        //   // form has error
        //   console.log(nikRef.value);
        // } else {
        //   $q.notify({
        //     icon: "done",
        //     color: "positive",
        //     message: "Submitted",
        //   });
        // }
      },

      onReset() {
        nik.value = null;
        name.value = null;
        age.value = null;
        nikRef.value.resetValidation();
        nameRef.value.resetValidation();
        ageRef.value.resetValidation();
      },
    };
  },
});
</script>
