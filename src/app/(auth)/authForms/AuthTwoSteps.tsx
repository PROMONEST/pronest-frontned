import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";

const AuthTwoSteps = () => (
  <>
    <Box mt={4}>
      <Stack mb={3}>
        <CustomFormLabel htmlFor="code">
          6桁のセキュリティコードを入力してください
        </CustomFormLabel>
        <Stack spacing={2} direction="row">
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
          <CustomTextField id="code" variant="outlined" fullWidth />
        </Stack>
      </Stack>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
      >
        アカウントを確認
      </Button>

      <Stack direction="row" spacing={1} mt={3}>
        <Typography color="textSecondary" variant="h6" fontWeight="400">
          コードが届かない場合
        </Typography>
        <Typography
          component={Link}
          href="/"
          fontWeight="500"
          sx={{
            textDecoration: "none",
            color: "primary.main",
          }}
        >
          再送信
        </Typography>
      </Stack>
    </Box>
  </>
);

export default AuthTwoSteps;
