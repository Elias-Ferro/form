import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PatternFormat } from "react-number-format";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Register } from "../Types/Register";

const messageRequiredField = "Campo obrigatório!";

const Form = () => {
  const formik = useFormik<Register>({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      address: {
        zip_code: "",
        street: "",
        number: "",
        district: "",
        city: "",
        county: "",
        reference: "",
        complement: "",
      },
    },
    validationSchema: Yup.object({
      name: Yup.string().required(messageRequiredField),
      surname: Yup.string().required(messageRequiredField),
      email: Yup.string().email().required(messageRequiredField),
      phone: Yup.string().required(messageRequiredField),
      address: Yup.object().shape({
        zip_code: Yup.string().required(messageRequiredField),
        street: Yup.string().required(messageRequiredField),
        number: Yup.string().required(messageRequiredField),
        district: Yup.string().required(messageRequiredField),
        city: Yup.string().required(messageRequiredField),
        county: Yup.string().required(messageRequiredField),
      }),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  return (
    <Box
      component={"form"}
      id={"form-add-store"}
      name={"form-add-store"}
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <Paper elevation={6} sx={{ padding: 5 }}>
        <Stack sx={{ marginBottom: 3 }}>
          <Typography component={"h1"}>Cadastro de Cliente</Typography>
        </Stack>
        <Box autoCapitalize="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <TextField
                name="name"
                label="Nome"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
                fullWidth
                error={formik.touched.name && !!formik.errors.name}
                helperText={
                  formik.touched.name &&
                  formik.errors.name &&
                  formik.errors.name
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <TextField
                name="surname"
                label="Sobrenome"
                value={formik.values.surname}
                onChange={formik.handleChange}
                fullWidth
                error={formik.touched.surname && !!formik.errors.surname}
                helperText={
                  formik.touched.surname &&
                  formik.errors.surname &&
                  formik.errors.surname
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
                fullWidth
                error={formik.touched.email && !!formik.errors.email}
                helperText={
                  formik.touched.email &&
                  formik.errors.email &&
                  formik.errors.email
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <PatternFormat
                id="phone"
                name="phone"
                label="Telefone"
                format="(##) # ####-####"
                customInput={TextField}
                value={formik.values.phone}
                onChange={formik.handleChange}
                required
                fullWidth
                error={formik.touched.phone && !!formik.errors.phone}
                helperText={
                  formik.touched.phone &&
                  formik.errors.phone &&
                  formik.errors.phone
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Endereço</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={12}>
                      <PatternFormat
                        name="zip_code"
                        label="CEP"
                        format="##.###-###"
                        customInput={TextField}
                        value={formik.values.address?.zip_code}
                        onChange={formik.handleChange}
                        required
                        fullWidth
                        error={
                          formik.touched.address?.zip_code &&
                          !!formik.errors.address?.zip_code
                        }
                        helperText={
                          formik.touched.address?.zip_code &&
                          formik.errors.address?.zip_code &&
                          formik.errors.address?.zip_code
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={8}>
                      <TextField
                        name="street"
                        label="Rua"
                        value={formik.values.address?.street}
                        onChange={formik.handleChange}
                        required
                        fullWidth
                        error={
                          formik.touched.address?.street &&
                          !!formik.errors.address?.street
                        }
                        helperText={
                          formik.touched.address?.street &&
                          formik.errors.address?.street &&
                          formik.errors.address?.street
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <TextField
                        name="number"
                        label="Numero"
                        value={formik.values.address?.number}
                        onChange={formik.handleChange}
                        required
                        fullWidth
                        error={
                          formik.touched.address?.number &&
                          !!formik.errors.address?.number
                        }
                        helperText={
                          formik.touched.address?.number &&
                          formik.errors.address?.number &&
                          formik.errors.address?.number
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={5}>
                      <TextField
                        name="district"
                        label="Bairro"
                        value={formik.values.address?.district}
                        onChange={formik.handleChange}
                        required
                        fullWidth
                        error={
                          formik.touched.address?.district &&
                          !!formik.errors.address?.district
                        }
                        helperText={
                          formik.touched.address?.district &&
                          formik.errors.address?.district &&
                          formik.errors.address?.district
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={5}>
                      <TextField
                        name="city"
                        label="Cidade"
                        value={formik.values.address?.city}
                        onChange={formik.handleChange}
                        required
                        fullWidth
                        error={
                          formik.touched.address?.city &&
                          !!formik.errors.address?.city
                        }
                        helperText={
                          formik.touched.address?.city &&
                          formik.errors.address?.city &&
                          formik.errors.address?.city
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={2}>
                      <TextField
                        name="county"
                        label="UF"
                        value={formik.values.address?.county}
                        onChange={formik.handleChange}
                        required
                        fullWidth
                        error={
                          formik.touched.address?.county &&
                          !!formik.errors.address?.county
                        }
                        helperText={
                          formik.touched.address?.county &&
                          formik.errors.address?.county &&
                          formik.errors.address?.county
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField
                        name="reference"
                        label="Ponto de Referência"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={6}>
                      <TextField
                        name="complement"
                        label="Complemento"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 4 }} />
          <Box sx={{ display: "flex", justifyContent: "end", mt: 5, gap: 1 }}>
            <Button variant="outlined" color="error">
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                formik.handleSubmit();
              }}
              color="success"
              startIcon={<CheckCircleIcon />}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Form;
