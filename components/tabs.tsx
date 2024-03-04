import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Tabs as ShadTabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
  
  export default function Tabs({
    stages,
    children,
  }: {
    stages: number;
    children?: React.ReactNode;
    title: string;
    desc: string;
  }) {
    const renderTabs = () => {
      const tabs = [];
      if (stages < 1) return;
      for (let i = 1; i <= stages; i++) {
        tabs.push(<TabsTrigger value={`stage${i}`}>Stage {i}</TabsTrigger>);
      }
      return <>{tabs}</>;
    };
    return (
      <ShadTabs defaultValue="stage1">
        <TabsList>{renderTabs()}</TabsList>
        {children}
      </ShadTabs>
    );
  }
  
  export const Tab = ({
    value,
    title,
    desc,
    children,
  }: {
    value: string;
    title: string;
    desc: string;
    children: React.ReactNode;
  }) => (
    <TabsContent value={value}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </TabsContent>
  );