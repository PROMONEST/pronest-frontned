import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

// components

import { Stack } from "@mui/system";
import {
  IconCirclePlus,
  IconCreditCard,
  IconPackage,
  IconPencilMinus,
} from "@tabler/icons-react";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import BlankCard from "@/app/components/shared/BlankCard";

const BillsTab = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={9}>
          <BlankCard>
            <CardContent>
              <Typography variant="h4" mb={2}>
                請求情報
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-bname">
                    会社名*
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-bname"
                    value="Visitor Analytics"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-bsector">
                    業種*
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-bsector"
                    value="アート、メディア＆エンターテインメント"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-baddress">
                    会社住所*
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-baddress"
                    value=""
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-bcy">
                    国*
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-bcy"
                    value="ルーマニア"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-fname">
                    名*
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-fname"
                    value=""
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-lname">
                    姓*
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-lname"
                    value=""
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
          </BlankCard>
        </Grid>

        {/* 2 */}
        <Grid item xs={12} lg={9}>
          <BlankCard>
            <CardContent>
              <Typography variant="h4" display="flex" mb={2}>
                現在のプラン：
                <Typography
                  variant="h4"
                  component="div"
                  ml="2px"
                  color="success.main"
                >
                  エグゼクティブ
                </Typography>
              </Typography>
              <Typography color="textSecondary">
                プレミアムメンバーとして開発をサポートしていただきありがとうございます。
              </Typography>

              {/* リスト1 */}
              <Stack direction="row" spacing={2} mt={4} mb={2}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "grey.100",
                    color: "grey.500",
                    width: 48,
                    height: 48,
                  }}
                >
                  <IconPackage size="22" />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    現在のプラン
                  </Typography>
                  <Typography variant="h6" mb={1}>
                    月間750,000ビジット
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <Tooltip title="追加">
                    <IconButton>
                      <IconCirclePlus size="22" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary">
                  プラン変更
                </Button>
                <Button variant="outlined" color="error">
                  プランリセット
                </Button>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>

        {/* 3 */}
        <Grid item xs={12} lg={9}>
          <BlankCard>
            <CardContent>
              <Typography variant="h4" mb={2}>
                支払い方法
              </Typography>
              <Typography color="textSecondary">2023年12月26日</Typography>
              {/* リスト2 */}
              <Stack direction="row" spacing={2} mt={4}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "grey.100",
                    color: "grey.500",
                    width: 48,
                    height: 48,
                  }}
                >
                  <IconCreditCard size="22" />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb={1}>
                    Visa
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    *****2102
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <Tooltip title="編集">
                    <IconButton>
                      <IconPencilMinus size="22" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Stack>
              <Typography color="textSecondary" my={1}>
                支払い方法を更新した場合、次の請求サイクル後にここに表示されます。
              </Typography>
              <Button variant="outlined" color="error">
                サブスクリプションをキャンセル
              </Button>
            </CardContent>
          </BlankCard>
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2} sx={{ justifyContent: "end" }} mt={3}>
        <Button size="large" variant="contained" color="primary">
          保存
        </Button>
        <Button size="large" variant="text" color="error">
          キャンセル
        </Button>
      </Stack>
    </>
  );
};

export default BillsTab;
