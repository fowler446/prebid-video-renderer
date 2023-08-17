const utils = (() => {
  const compareCodeAndSlot = (slot: any, adUnitCode: string) => slot.getAdUnitPath() === adUnitCode || slot.getSlotElementId() === adUnitCode;

  function isGptPubadsDefined() {
    return (window.googletag && (typeof window.googletag.pubads === 'function') && (typeof window.googletag.pubads().getSlots === 'function'));
  }

  function isSlotMatchingAdUnitCode(adUnitCode: string) {
    return (slot: any) => compareCodeAndSlot(slot, adUnitCode);
  }

  function getGptSlotForAdUnitCode(adUnitCode: string) {
    let matchingSlot;
    if (isGptPubadsDefined()) {
      // find the first matching gpt slot on the page
      matchingSlot = window.googletag.pubads().getSlots().find(isSlotMatchingAdUnitCode(adUnitCode));
    }
    return matchingSlot;
  }

  function getGptSlotInfoForAdUnitCode(adUnitCode: string) {
    const matchingSlot = getGptSlotForAdUnitCode(adUnitCode);
    if (matchingSlot) {
      return {
        gptSlot: matchingSlot,
        gptSlotName: matchingSlot.getAdUnitPath(),
        divId: matchingSlot.getSlotElementId(),
      };
    }
    return {};
  }

  return {
    getGptSlotInfoForAdUnitCode,
  }
})();

export default utils
