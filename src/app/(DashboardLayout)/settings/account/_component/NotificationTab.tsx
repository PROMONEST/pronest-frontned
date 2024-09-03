import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import {
  IconArticle,
  IconCheckbox,
  IconClock,
  IconDownload,
  IconMail,
  IconPlayerPause,
  IconTruckDelivery,
} from "@tabler/icons-react";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import BlankCard from "@/app/components/shared/BlankCard";
import CustomSwitch from "@/app/components/forms/theme-elements/CustomSwitch";

const NotificationTab = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={9}>
          <BlankCard>
            <CardContent>
              <Typography variant="h4" mb={2}>
                通知設定
              </Typography>
              <Typography color="textSecondary">
                メールで受け取りたい通知を選択してください。支払い、セキュリティ、法的な通知などのサービスメッセージの受信をオプトアウトすることはできませんのでご注意ください。
              </Typography>

              <CustomFormLabel htmlFor="text-email">
                メールアドレス*
              </CustomFormLabel>
              <CustomTextField id="text-email" variant="outlined" fullWidth />
              <Typography color="textSecondary">
                通知のために必要です。
              </Typography>

              {/* リスト1 */}
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
                  <IconArticle size="22" />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb={1}>
                    ニュースレター
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    重要な変更については必ずお知らせします
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <CustomSwitch />
                </Box>
              </Stack>

              {/* リスト2 */}
              <Stack direction="row" spacing={2} mt={3}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "grey.100",
                    color: "grey.500",
                    width: 48,
                    height: 48,
                  }}
                >
                  <IconCheckbox size="22" />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb={1}>
                    注文確認
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    顧客が商品を注文したときに通知されます
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <CustomSwitch checked />
                </Box>
              </Stack>

              {/* リスト3 */}
              <Stack direction="row" spacing={2} mt={3}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "grey.100",
                    color: "grey.500",
                    width: 48,
                    height: 48,
                  }}
                >
                  <IconClock size="22" />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb={1}>
                    注文ステータス変更
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    顧客が注文を変更したときに通知されます
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <CustomSwitch checked />
                </Box>
              </Stack>

              {/* リスト4 */}
              <Stack direction="row" spacing={2} mt={3}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "grey.100",
                    color: "grey.500",
                    width: 48,
                    height: 48,
                  }}
                >
                  <IconTruckDelivery size="22" />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb={1}>
                    配送完了
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    注文が配送されたときに通知されます
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <CustomSwitch />
                </Box>
              </Stack>

              {/* リスト5 */}
              <Stack direction="row" spacing={2} mt={3}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "grey.100",
                    color: "grey.500",
                    width: 48,
                    height: 48,
                  }}
                >
                  <IconMail size="22" />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb={1}>
                    メール通知
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    メールで通知を受け取るには、メール通知をオンにしてください
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <CustomSwitch checked />
                </Box>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>

        {/* 2 */}
        <Grid item xs={12} lg={9}>
          <BlankCard>
            <CardContent>
              <Typography variant="h4" mb={2}>
                日付と時刻
              </Typography>
              <Typography color="textSecondary">
                タイムゾーンとカレンダー表示設定。
              </Typography>

              {/* リスト1 */}
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
                  <IconClock size="22" />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    タイムゾーン
                  </Typography>
                  <Typography variant="h6" mb={1}>
                    (UTC + 02:00) アテネ、ブカレスト
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <Tooltip title="ダウンロード">
                    <IconButton>
                      <IconDownload size="22" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>

        {/* 3 */}
        <Grid item xs={12} lg={9}>
          <BlankCard>
            <CardContent>
              <Typography variant="h4" mb={2}>
                トラッキング無視
              </Typography>

              {/* リスト1 */}
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
                  <IconPlayerPause size="22" />
                </Avatar>
                <Box>
                  <Typography variant="h6" mb={1}>
                    ブラウザトラッキング無視
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    ブラウザクッキー
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <CustomSwitch />
                </Box>
              </Stack>
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

export default NotificationTab;
