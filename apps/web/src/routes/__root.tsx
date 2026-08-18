import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

import {
  AppSidebar,
  BootstrapProvider,
  Header,
  LoginModal,
  Provider,
  QueryProvider,
  RegisterModal,
  SidebarInset,
} from "#/components";
import { cn } from "#/lib";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div
          className={cn(`h-dvh w-dvw flex flex-col overflow-hidden
          `)}
        >
          <QueryProvider>
            <BootstrapProvider>
              <Provider>
                <div className="size-full flex overflow-hidden">
                  <AppSidebar />
                  <SidebarInset className="flex flex-1 flex-col overflow-hidden">
                    <Header />
                    <div className="p-4 flex-1 overflow-hidden">{children}</div>
                  </SidebarInset>
                </div>
                <LoginModal />
                <RegisterModal />
              </Provider>
            </BootstrapProvider>
          </QueryProvider>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
