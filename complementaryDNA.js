import assert from "assert/strict";

/**
 * Given a string representing a DNA sequence, return its complementary strand
 * using the following rules:
 *   - DNA consists of the letters 'A','C','G', and 'T'.
 *   - The letters 'A' and 'T' complement each other.
 *   - The letters 'C' and 'G' complement each other.
 * */
function complementaryDNA(strand) {
    const complement = {
        A: "T",
        T: "A",
        C: "G",
        G: "C",
    };
    return strand
        .split("")
        .reduce((prev, curr) => (prev += complement[curr]), "");
}

assert.equal(complementaryDNA("ACGT"), "TGCA");
assert.equal(complementaryDNA("ATGCGTACGTTAGC"), "TACGCATGCAATCG");
assert.equal(complementaryDNA("GGCTTACGATCGAAG"), "CCGAATGCTAGCTTC");
assert.equal(complementaryDNA("GATCTAGCTAGGCTAGCTAG"), "CTAGATCGATCCGATCGATC");
