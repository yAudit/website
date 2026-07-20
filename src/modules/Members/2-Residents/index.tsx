import { alumni_residents } from "../Data/alumni-residents";
import { alumni_core } from "../Data/alumni-core";
import { sc_residents } from "../Data/smart-contract-residents";
import { zk_residents } from "../Data/zk-residents";
import { Template } from "../1-Core";

export function SmartContractResident() {
  return (
    <>
      <Template title={"Smart Contract Auditors"} members={sc_residents} />
    </>
  );
}

export function ZKResident() {
  return (
    <>
      <Template title={"ZK Auditors"} members={zk_residents} />
    </>
  );
}

export function ResidentAlumni() {
  return (
    <>
      <Template title={"Alumni Residents"} members={alumni_residents} />
    </>
  );
}

export function AlumniCore() {
  return (
    <>
      <Template title={"Alumni Core"} members={alumni_core} />
    </>
  );
}
