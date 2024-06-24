import { Range } from "../Range/Range";
import { ADVANCED_FILTER } from "../../constants";

export const AdvancedFilter = () => {
  return (
    <>
      <Range title="Length Overall" r1={ADVANCED_FILTER.minLengthOverall} r2={ADVANCED_FILTER.maxLengthOverall} />
      <Range title="Beam Width" r1={ADVANCED_FILTER.minBeamWidth} r2={ADVANCED_FILTER.maxBeamWidth} />
      <Range title="Draft Depth" r1={ADVANCED_FILTER.minDraftDepth} r2={ADVANCED_FILTER.maxDraftDepth} />
    </>
  );
}
