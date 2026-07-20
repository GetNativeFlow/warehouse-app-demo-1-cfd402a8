import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Report() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_0e8deb2b_4ad6_44b2_b40d_adc1d604f7e5}>
              <View style={styles.node_c30c930b_4b2b_4491_9d01_940ec374d5cb}>
                        <View style={styles.node_267890ab_106c_4ff1_9855_dc00677c89c8}>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m15 18-6-6 6-6"></Path></Svg></View>
                                    <Text style={styles.node_c7a6004c_2e73_4106_a1ac_eeb98bd0e3ca}>Dashboard</Text>
                        </View>
                        <Text style={styles.node_769c6d0a_7293_4e40_a8cf_8313c756656e}>Audit Report</Text>
                        <Text style={styles.node_5a6a4e6e_32ef_4158_b878_0082b04bcd19}>Sector 7 · Shift A · 15 May 2026</Text>
              </View>
              <View style={styles.node_2b080920_797f_431f_b0e7_4688bc368862}>
                        <View style={styles.node_427b6db4_c7db_43da_8d19_9dafa44abc94}>
                                    <Text style={styles.node_bc72b27f_86a2_4444_bbe0_bf762d928529}>84</Text>
                                    <Text style={styles.node_10c001a3_101c_45a6_a571_dd1f9c312f77}>/100</Text>
                        </View>
                        <View style={styles.node_87cc9d96_1e6c_4657_bd53_f01b0815b279}>
                                    <Text style={styles.node_c9d11542_544d_4afa_8ab8_29806a73b4ac}>Compliance Score</Text>
                                    <Text style={styles.node_b659f8b8_f929_479f_b320_d6f64dfc23c7}>5 of 8 zones complete</Text>
                                    <Text style={styles.node_edbf345d_5e75_4af3_866c_d2bbc97cb906}>3 open issues pending</Text>
                                    <View style={styles.node_2f8f2bdc_baf4_4f8a_b8e4_fe21fcb4a3d8}>
                                                  <Text style={styles.node_241493cd_bc4f_4333_af3c_7f2a72c8b07b}>Shift A · 15 May 2026</Text>
                                    </View>
                        </View>
              </View>
              <View style={styles.node_64038bcc_53fd_4635_b78a_6377bd5cf780}>
                        <View style={styles.node_826f01a5_9444_48b2_a9cf_6a98d70aa585}>
                                    <Text style={styles.node_6301bdc4_f92a_4b59_8738_b6d16f231850}>ZONE BREAKDOWN</Text>
                                    <View style={styles.node_de9bb766_16fd_411b_9f20_d28d1db84c7f}>
                                                  <Text style={styles.node_7c9fc0c9_28c5_452e_96e9_ebe939037c61}>Zone A · Receiving</Text>
                                                  <View style={styles.node_db106ab1_be60_43da_8d9f_df6686bdba22}>
                                                                  <View style={[styles.node_2ba67006_9097_41bf_b6de_bcb6c20f44db, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                                    <View style={{ width: '78%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                                  </View>
                                                  </View>
                                                  <Text style={styles.node_49fc7ead_e3e4_4c3e_8075_9f060c1d14b3}>78%</Text>
                                    </View>
                                    <View style={styles.node_8ea6d4df_6d19_4c79_b097_0e371c611f4b}>
                                                  <Text style={styles.node_232d4a59_70f1_4283_addf_a7eb2084dfc7}>Zone B · Cold Stor...</Text>
                                                  <View style={styles.node_dd63d18c_1f5e_4f5d_9e4a_87413d8c9280}>
                                                                  <View style={[styles.node_143c3aab_e1e4_446d_9e55_a211f81cb252, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                                    <View style={{ width: '62%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                                  </View>
                                                  </View>
                                                  <Text style={styles.node_862887cb_3ff7_4ea4_9132_b4b91955914a}>62%</Text>
                                    </View>
                                    <View style={styles.node_e869ca29_1e7d_4186_bc30_145abd9e0e72}>
                                                  <Text style={styles.node_0c2743f5_ffe4_479a_9799_917473619fd1}>Zone C · Dispatch</Text>
                                                  <View style={styles.node_93e1e7fb_a017_4eef_9a03_0110d8253525}>
                                                                  <View style={[styles.node_ac091cb2_8741_4d76_bd81_4dd0b7692ea7, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                                    <View style={{ width: '100%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                                  </View>
                                                  </View>
                                                  <Text style={styles.node_dfcf7d66_d271_41c5_b9e9_726fc3f902cc}>100%</Text>
                                    </View>
                                    <View style={styles.node_988a577e_ef00_40e8_8252_bbafa55f520f}>
                                                  <Text style={styles.node_c73e074f_0465_4738_89f7_722f59aac990}>Zone D · Equipment</Text>
                                                  <View style={styles.node_18a2c8a8_ec5b_48a3_8ae0_fe73f07725bd}>
                                                                  <View style={[styles.node_8111c822_9d06_4361_94a6_acaee103ce3e, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                                    <View style={{ width: '60%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                                  </View>
                                                  </View>
                                                  <Text style={styles.node_3b341a33_79cc_48f9_b83a_6d78ad83d79f}>—</Text>
                                    </View>
                        </View>
                        <View style={styles.node_ce78a51f_9c06_4fdd_ba7a_5ff47d8b37c7}>
                                    <View style={styles.node_3c60e002_ee1e_48e4_bf4c_d4b8205ec509}>
                                                  <Text style={styles.node_5d8f8909_1b06_4a34_b8cb_bda816708b60}>38</Text>
                                                  <Text style={styles.node_331a59b7_0a98_4d0d_9558_de9b461ef633}>PASSED</Text>
                                    </View>
                                    <View style={styles.node_ffd1250c_4d64_48d7_b369_539ef7047a62}>
                                                  <Text style={styles.node_79f5ee9b_b5e8_4b41_b9f8_cd413d320424}>2</Text>
                                                  <Text style={styles.node_8548d903_229d_400b_aba9_e22c73fe536c}>CRITICAL</Text>
                                    </View>
                                    <View style={styles.node_fc78b9bb_2f15_4c33_a33a_bff20de88133}>
                                                  <Text style={styles.node_780aec23_69c1_4c9d_a6f5_1128e68c9e8e}>45</Text>
                                                  <Text style={styles.node_3bac23c9_78b7_46e3_a133_073ec3a2eaa0}>TOTAL CHECKS</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_788e0dab_efba_42c1_bfe3_349a217be02c}>OPEN ISSUES</Text>
                        <View style={styles.node_148b3bbf_e738_4bf6_b5c8_6e1863a64f63}>
                                    <View style={styles.node_4304e750_5501_4d83_879f_93c7d22d61bb} />
                                    <Text style={styles.node_3be688bb_8d86_458c_bdd6_b65a9d0f0ad6}>Sprinkler blockage — Aisle 3</Text>
                                    <View style={styles.node_7a9ac35d_d12d_44a2_851d_c496c661f317}>
                                                  <Text style={styles.node_b55c6439_94a6_46c4_86ac_ec674cc0f8bb}>CRITICAL</Text>
                                    </View>
                        </View>
                        <View style={styles.node_400126b4_5fda_4b92_8c87_7d34bb5b4ee0}>
                                    <View style={styles.node_08dc6855_139f_47a1_a943_8bbf4a5614f7} />
                                    <Text style={styles.node_a713db46_7ee2_438d_97e3_4c4efe9dc9df}>Cold storage temp alarm — Zone B</Text>
                                    <View style={styles.node_715340a9_2acb_45f4_81b3_05a9ce03d400}>
                                                  <Text style={styles.node_384d2b79_dc6a_4cc8_9ddd_d0b27c0b5e80}>CRITICAL</Text>
                                    </View>
                        </View>
                        <View style={styles.node_278523ce_c62b_4ae0_8815_dc6003df90a6}>
                                    <View style={styles.node_a4273e3e_0617_4c40_a115_b1d14f9815dc} />
                                    <Text style={styles.node_d31ec212_c0b8_498a_9d78_87d53cbe686f}>Exit path blocked — Bay 7</Text>
                                    <View style={styles.node_2dfa19b0_b89e_4758_917c_0a315ebae9bd}>
                                                  <Text style={styles.node_b7d4b0aa_a49a_453d_9443_4478dc4f4aa2}>MEDIUM</Text>
                                    </View>
                        </View>
              </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#F1F3F9',
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F3F9',
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
  },
  containerContent: {
    width: '100%',
    alignSelf: 'stretch',
  },
  node_0e8deb2b_4ad6_44b2_b40d_adc1d604f7e5: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_c30c930b_4b2b_4491_9d01_940ec374d5cb: {
    gap: 4,
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  node_267890ab_106c_4ff1_9855_dc00677c89c8: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_c7a6004c_2e73_4106_a1ac_eeb98bd0e3ca: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_769c6d0a_7293_4e40_a8cf_8313c756656e: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 24,
  },
  node_5a6a4e6e_32ef_4158_b878_0082b04bcd19: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_2b080920_797f_431f_b0e7_4688bc368862: {
    gap: 31,
    paddingTop: 20,
    paddingLeft: 20,
    borderRadius: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#4338CA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_427b6db4_c7db_43da_8d19_9dafa44abc94: {
    gap: 0,
    width: 88,
    height: 88,
    borderColor: '#7C6FE0',
    borderWidth: 2,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  node_bc72b27f_86a2_4444_bbe0_bf762d928529: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  node_10c001a3_101c_45a6_a571_dd1f9c312f77: {
    color: '#C4B8F5',
    fontSize: 12,
  },
  node_87cc9d96_1e6c_4657_bd53_f01b0815b279: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_c9d11542_544d_4afa_8ab8_29806a73b4ac: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  node_b659f8b8_f929_479f_b320_d6f64dfc23c7: {
    color: '#C4B8F5',
    fontSize: 12,
  },
  node_edbf345d_5e75_4af3_866c_d2bbc97cb906: {
    color: '#C4B8F5',
    fontSize: 12,
  },
  node_2f8f2bdc_baf4_4f8a_b8e4_fe21fcb4a3d8: {
    paddingTop: 4,
    paddingLeft: 12,
    borderRadius: 20,
    paddingRight: 12,
    paddingBottom: 4,
    backgroundColor: '#3730A3',
  },
  node_241493cd_bc4f_4333_af3c_7f2a72c8b07b: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  node_64038bcc_53fd_4635_b78a_6377bd5cf780: {
    gap: 12,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_826f01a5_9444_48b2_a9cf_6a98d70aa585: {
    gap: 0,
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_6301bdc4_f92a_4b59_8738_b6d16f231850: {
    color: '#9CA3AF',
    fontWeight: '600',
    fontSize: 12,
  },
  node_de9bb766_16fd_411b_9f20_d28d1db84c7f: {
    gap: 10,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_7c9fc0c9_28c5_452e_96e9_ebe939037c61: {
    color: '#374151',
    width: 130,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  node_db106ab1_be60_43da_8d9f_df6686bdba22: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_2ba67006_9097_41bf_b6de_bcb6c20f44db: {
    color: '#3B82F6',
  },
  node_49fc7ead_e3e4_4c3e_8075_9f060c1d14b3: {
    color: '#3B82F6',
    minWidth: 44,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_8ea6d4df_6d19_4c79_b097_0e371c611f4b: {
    gap: 10,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_232d4a59_70f1_4283_addf_a7eb2084dfc7: {
    color: '#374151',
    width: 130,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  node_dd63d18c_1f5e_4f5d_9e4a_87413d8c9280: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_143c3aab_e1e4_446d_9e55_a211f81cb252: {
    color: '#EF4444',
  },
  node_862887cb_3ff7_4ea4_9132_b4b91955914a: {
    color: '#EF4444',
    minWidth: 44,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_e869ca29_1e7d_4186_bc30_145abd9e0e72: {
    gap: 10,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_0c2743f5_ffe4_479a_9799_917473619fd1: {
    color: '#374151',
    width: 130,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  node_93e1e7fb_a017_4eef_9a03_0110d8253525: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_ac091cb2_8741_4d76_bd81_4dd0b7692ea7: {
    color: '#22C55E',
  },
  node_dfcf7d66_d271_41c5_b9e9_726fc3f902cc: {
    color: '#22C55E',
    minWidth: 44,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_988a577e_ef00_40e8_8252_bbafa55f520f: {
    gap: 10,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_c73e074f_0465_4738_89f7_722f59aac990: {
    color: '#374151',
    width: 130,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  node_18a2c8a8_ec5b_48a3_8ae0_fe73f07725bd: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_8111c822_9d06_4361_94a6_acaee103ce3e: {
    color: '#E5E7EB',
  },
  node_3b341a33_79cc_48f9_b83a_6d78ad83d79f: {
    color: '#9CA3AF',
    minWidth: 44,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_ce78a51f_9c06_4fdd_ba7a_5ff47d8b37c7: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
  },
  node_3c60e002_ee1e_48e4_bf4c_d4b8205ec509: {
    gap: 4,
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_5d8f8909_1b06_4a34_b8cb_bda816708b60: {
    color: '#22C55E',
    fontWeight: 'bold',
    fontSize: 24,
  },
  node_331a59b7_0a98_4d0d_9558_de9b461ef633: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_ffd1250c_4d64_48d7_b369_539ef7047a62: {
    gap: 4,
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_79f5ee9b_b5e8_4b41_b9f8_cd413d320424: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 24,
  },
  node_8548d903_229d_400b_aba9_e22c73fe536c: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_fc78b9bb_2f15_4c33_a33a_bff20de88133: {
    gap: 4,
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_780aec23_69c1_4c9d_a6f5_1128e68c9e8e: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 24,
  },
  node_3bac23c9_78b7_46e3_a133_073ec3a2eaa0: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_788e0dab_efba_42c1_bfe3_349a217be02c: {
    color: '#9CA3AF',
    fontWeight: '600',
    fontSize: 12,
  },
  node_148b3bbf_e738_4bf6_b5c8_6e1863a64f63: {
    gap: 10,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":1},"shadowRadius":3,"shadowOpacity":0.06},
    boxShadow: '0px 1px 3px rgba(0,0,0,0.06)',
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_4304e750_5501_4d83_879f_93c7d22d61bb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
  },
  node_3be688bb_8d86_458c_bdd6_b65a9d0f0ad6: {
    color: '#111827',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_7a9ac35d_d12d_44a2_851d_c496c661f317: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FEF2F2',
  },
  node_b55c6439_94a6_46c4_86ac_ec674cc0f8bb: {
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 12,
  },
  node_400126b4_5fda_4b92_8c87_7d34bb5b4ee0: {
    gap: 10,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":1},"shadowRadius":3,"shadowOpacity":0.06},
    boxShadow: '0px 1px 3px rgba(0,0,0,0.06)',
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_08dc6855_139f_47a1_a943_8bbf4a5614f7: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
  },
  node_a713db46_7ee2_438d_97e3_4c4efe9dc9df: {
    color: '#111827',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_715340a9_2acb_45f4_81b3_05a9ce03d400: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FEF2F2',
  },
  node_384d2b79_dc6a_4cc8_9ddd_d0b27c0b5e80: {
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 12,
  },
  node_278523ce_c62b_4ae0_8815_dc6003df90a6: {
    gap: 10,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":1},"shadowRadius":3,"shadowOpacity":0.06},
    boxShadow: '0px 1px 3px rgba(0,0,0,0.06)',
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    marginBottom: 24,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_a4273e3e_0617_4c40_a115_b1d14f9815dc: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F59E0B',
  },
  node_d31ec212_c0b8_498a_9d78_87d53cbe686f: {
    color: '#111827',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_2dfa19b0_b89e_4758_917c_0a315ebae9bd: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FFF7ED',
  },
  node_b7d4b0aa_a49a_453d_9443_4478dc4f4aa2: {
    color: '#F59E0B',
    fontWeight: '700',
    fontSize: 12,
  },
});

