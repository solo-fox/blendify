import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import OnboardingForm from "@/components/onboarding/form";

const meta: Meta<typeof OnboardingForm> = {
  component: OnboardingForm,
  tags: ["autodocs"],
  title: "Components/onborading/form",
  decorators: [
    (Story) => (
      <div className="w-[100vw] items-center justify-center flex">
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
