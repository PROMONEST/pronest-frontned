import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// components
import { Stack } from "@mui/system";
import {
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDotsVertical,
} from "@tabler/icons-react";
import BlankCard from "@/app/components/shared/BlankCard";

const SecurityTab = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={8}>
          <BlankCard>
            <CardContent>
              <Typography variant="h4" mb={2}>
                二要素認証
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
              >
                <Typography variant="subtitle1" color="textSecondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis sapiente sunt earum officiis laboriosam ut.
                </Typography>
                <Button variant="contained" color="primary">
                  有効にする
                </Button>
              </Stack>

              <Divider />

              {/* リスト1 */}
              <Stack direction="row" spacing={2} py={2} alignItems="center">
                <Box>
                  <Typography variant="h6">認証アプリ</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Google認証アプリ
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <Button variant="text" color="primary">
                    設定
                  </Button>
                </Box>
              </Stack>
              <Divider />
              {/* リスト2 */}
              <Stack direction="row" spacing={2} py={2} alignItems="center">
                <Box>
                  <Typography variant="h6">別のEメール</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    認証リンクを送信するEメール
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <Button variant="text" color="primary">
                    設定
                  </Button>
                </Box>
              </Stack>
              <Divider />
              {/* リスト3 */}
              <Stack direction="row" spacing={2} py={2} alignItems="center">
                <Box>
                  <Typography variant="h6">SMSリカバリ</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    あなたの電話番号など
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <Button variant="text" color="primary">
                    設定
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
        <Grid item xs={12} lg={4}>
          <BlankCard>
            <CardContent>
              <Avatar
                variant="rounded"
                sx={{
                  bgcolor: "primary.light",
                  color: "primary.main",
                  width: 48,
                  height: 48,
                }}
              >
                <IconDeviceLaptop size="26" />
              </Avatar>

              <Typography variant="h5" mt={2}>
                デバイス
              </Typography>
              <Typography color="textSecondary" mt={1} mb={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Rem.
              </Typography>
              <Button variant="contained" color="primary">
                全てのデバイスからサインアウト
              </Button>

              {/* リスト1 */}
              <Stack
                direction="row"
                spacing={2}
                py={2}
                mt={3}
                alignItems="center"
              >
                <IconDeviceMobile size="26" />

                <Box>
                  <Typography variant="h6">iPhone 14</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    イギリス ロンドン, 10月23日 午前1:15
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <IconButton>
                    <IconDotsVertical size="22" />
                  </IconButton>
                </Box>
              </Stack>
              <Divider />
              {/* リスト2 */}
              <Stack direction="row" spacing={2} py={2} alignItems="center">
                <IconDeviceLaptop size="26" />

                <Box>
                  <Typography variant="h6">Macbook Air</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    インド グジャラート, 10月24日 午前3:15
                  </Typography>
                </Box>
                <Box sx={{ ml: "auto !important" }}>
                  <IconButton>
                    <IconDotsVertical size="22" />
                  </IconButton>
                </Box>
              </Stack>
              <Stack>
                <Button variant="text" color="primary">
                  サポートが必要ですか？
                </Button>
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

export default SecurityTab;
