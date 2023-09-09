"use client"
import React from "react";
import styles from "@/styles/Home.module.scss";
import { usePathname, useRouter } from 'next/navigation'
// import { UploadButton } from "@/components/uploadButton/UploadButton";
import { Menu } from "antd";
import {
  DeleteOutlined,
  FileImageOutlined,
  FileOutlined,
} from "@ant-design/icons";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  const router = useRouter();
  const selectedMenu = usePathname();

  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        {/* <UploadButton /> */}
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={[selectedMenu]}
          items={[
            {
              key: `/dashboard`,
              icon: <FileOutlined />,
              label: `Файлы`,
              onClick: () => router.push("/dashboard"),
            },
            // {
            //   key: `/dashboard/photos`,
            //   icon: <FileImageOutlined />,
            //   label: `Фото`,
            //   onClick: () => router.push("/dashboard/photos"),
            // },
            // {
            //   key: `/dashboard/trash`,
            //   icon: <DeleteOutlined />,
            //   label: `Корзина`,
            //   onClick: () => router.push("/dashboard/trash"),
            // },
          ]}
        />
      </div>

      <div className="container">{children}</div>
    </main>
  );
  }