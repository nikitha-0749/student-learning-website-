import Layout from "../components/Layout";
import StudyTimer from "../components/StudyTimer";

export default function StudyTimerPage() {
  return (
    <Layout>
      <h1 style={{ marginBottom: "30px" }}>Study Timer</h1>
      <StudyTimer />
    </Layout>
  );
}