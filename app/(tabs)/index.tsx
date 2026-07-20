import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_bfdf793a_c3ef_4bec_9b13_e24cad57dc8c}>
              <View style={styles.node_ed66d0a2_0ef2_4fc3_9ff0_076085210596}>
                        <Text style={styles.node_d0433e73_05dc_4c54_bc26_127204826811}>GOOD MORNING, R. CHEN 👋</Text>
                        <Text style={styles.node_c2dcbc37_5348_4a6b_90ce_248a3e5b5625}>Warehouse Audit</Text>
                        <Text style={styles.node_1ff8fd5f_5358_4e39_ac03_db988e9f60b5}>Sector 7 · Bay 12 · Shift A · 15 May 2026</Text>
              </View>
              <View style={styles.node_87bd5a92_0712_4768_b4aa_0e143be61266}>
                        <View style={styles.node_3e2b3f4b_e338_4688_9804_8d6362c31903}>
                                    <View style={styles.node_c7988605_0e75_4485_91c7_b0a6347ca3bb}>
                                                  <Text style={styles.node_c9602876_3615_40e7_b04c_3a4f7a4f2779}>5</Text>
                                                  <Text style={styles.node_b76a622c_7406_4bdd_98cb_0d433d9a4e37}>DONE</Text>
                                    </View>
                                    <View style={styles.node_bff0641d_9940_4412_b3ea_ca678f4661c0}>
                                                  <Text style={styles.node_c95daad6_593d_4134_9763_b977d29a840f}>3</Text>
                                                  <Text style={styles.node_8bbb8323_f823_475f_90ab_249d02fba60c}>ISSUES</Text>
                                    </View>
                                    <View style={styles.node_b892ce11_d3d2_4f85_9f7f_bd6eea738ff7}>
                                                  <Text style={styles.node_8c4b5c1c_86a7_4def_8dcf_8948aab97d81}>8</Text>
                                                  <Text style={styles.node_3d071f70_6a6d_413d_af43_3d5adea71681}>ZONES</Text>
                                    </View>
                                    <View style={styles.node_d0f71116_b77a_47a6_a831_ff3835bae889}>
                                                  <Text style={styles.node_f0c61cbe_3b56_4e68_81d0_87c5e2291c71}>84%</Text>
                                                  <Text style={styles.node_5e058313_c8c0_4369_8268_dc292cb533c4}>SCORE</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_1c30def1_78f9_49e0_a394_77497eb7684b}>ACTIVE ZONES</Text>
                        <TouchableOpacity style={styles.node_c3930ac2_f41c_4ecc_afa4_064950480ac4} activeOpacity={0.7} onPress={() => { try { console.log('Hello from NativeFlow Studio');// Iterate from 1 to 100 and log each number
                        for (let i = 1; i <= 100; i++) {
                          console.log(`Number: ${i}`);
                        }
                        
                        console.log('Iteration complete'); } catch(e) { console.error('[Action Error]', e); } }}>
                                    <View style={styles.node_1f13ab3f_27a1_42e9_a8b7_55cf056377ef}>
                                                  <View style={styles.node_92815803_8d38_41f1_b802_50aead6c2ffe}>
                                                                  <View style={styles.node_34164b48_6985_471c_baa3_d504f425fa5e}>
                                                                                    <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} stroke="#22C55E" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></Path><Path d="m3.3 7 8.7 5 8.7-5"></Path><Path d="M12 22V12"></Path></Svg></View>
                                                                  </View>
                                                                  <View style={styles.node_73172839_c466_4ae8_b455_0f4a6549ec90}>
                                                                                    <View style={styles.node_9ba6e26d_a34e_4903_9032_5cb4bd5c2713}>
                                                                                                        <Text style={styles.node_44b84020_7b02_4a07_ad0d_1c03f1d83ff2}>Zone C · Dispatch Bay</Text>
                                                                                                        <View style={styles.node_b3b1a7bd_aa15_4437_a15b_44446bd44a44}>
                                                                                                                              <Text style={styles.node_389e3f0f_c2bc_403c_8a5f_a9751d356381}>DONE</Text>
                                                                                                        </View>
                                                                                    </View>
                                                                                    <Text style={styles.node_b3201da1_10f4_4100_956a_badbab48eb7b}>10 checks · all clear</Text>
                                                                  </View>
                                                  </View>
                                                  <View style={[styles.node_37843bf5_72c2_4d15_ac89_a0b8fdcd9c36, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                    <View style={{ width: '85%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                  </View>
                                    </View>
                        </TouchableOpacity>
                        <View style={styles.node_3b470e89_2055_43ed_b6fd_ae9f27f5d235}>
                                    <View style={styles.node_c68880e4_be52_4088_ad53_35d870528ad5}>
                                                  <View style={styles.node_75490759_5e77_478b_bd21_0e68b9a42bfc}>
                                                                  <View style={styles.node_580345ef_bfe3_459b_adba_1b665a498fa1}>
                                                                                    <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></Path><Rect width="20" height="14" x="2" y="6" rx="2"></Rect></Svg></View>
                                                                  </View>
                                                                  <View style={styles.node_6a75af1b_0f05_461c_984b_76d602c1e525}>
                                                                                    <View style={styles.node_4298d14e_f95c_4622_8ecc_47a58d9cc28f}>
                                                                                                        <Text style={styles.node_ca41a130_8ec5_49e7_a997_74143acb1da6}>Zone A · Receiving Dock</Text>
                                                                                                        <View style={styles.node_273a9e67_78fc_4382_b35b_a282087ab094}>
                                                                                                                              <Text style={styles.node_a712f15c_2765_419f_9f6a_44acb821cad7}>IN PROG</Text>
                                                                                                        </View>
                                                                                    </View>
                                                                                    <Text style={styles.node_fdf33ab3_4302_47e3_a778_e536a1db610a}>12 checks · 3 flagged</Text>
                                                                  </View>
                                                  </View>
                                                  <View style={[styles.node_6c61d926_8cc4_4e4c_a4bc_564124e406d3, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                    <View style={{ width: '35%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                  </View>
                                    </View>
                        </View>
                        <TouchableOpacity style={styles.node_cc32e81c_8ab5_4457_b12f_3bb64b8e3f61} activeOpacity={0.7} onPress={() => { try { router.push('/report'); } catch(e) { console.error('[Action Error]', e); } }}>
                                    <View style={styles.node_a80f67b7_cb59_4695_b9e6_8d12cbe284be}>
                                                  <View style={styles.node_0c182577_5e19_48eb_aa27_57e519f7123a}>
                                                                  <View style={styles.node_cea1444b_9c54_43c6_8784_d4682c25b091}>
                                                                                    <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} stroke="#EF4444" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="7" height="7" x="3" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="3" rx="1"></Rect><Rect width="7" height="7" x="14" y="14" rx="1"></Rect><Rect width="7" height="7" x="3" y="14" rx="1"></Rect></Svg></View>
                                                                  </View>
                                                                  <View style={styles.node_e22191fc_3975_4dbf_849a_e8d47c8b6251}>
                                                                                    <View style={styles.node_8f2e0dfa_f7fb_4a27_bd54_35ac9cb3e5bf}>
                                                                                                        <Text style={styles.node_8582b899_71d3_4c79_9fda_eca0cce9131d}>Zone B · Cold Storage</Text>
                                                                                                        <View style={styles.node_65f63617_64c9_422d_8424_ad09dc9183b6}>
                                                                                                                              <Text style={styles.node_3a805bc8_84b8_4dfd_9e18_63d5c40f4485}>ISSUE</Text>
                                                                                                        </View>
                                                                                    </View>
                                                                                    <Text style={styles.node_713e4abb_5693_4e23_ba80_1c11ffd65b07}>8 checks · 2 critical</Text>
                                                                  </View>
                                                  </View>
                                                  <View style={[styles.node_9def3ac4_3946_4364_b448_0b9547eab88e, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                    <View style={{ width: '20%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                  </View>
                                    </View>
                        </TouchableOpacity>
                        <View style={styles.node_5860e015_bd9b_48d0_b15d_e0e0164ec534}>
                                    <View style={styles.node_39e3af56_ebfc_433b_9d88_15d3af1ec45b}>
                                                  <View style={styles.node_d146871f_3d8f_4c39_bd1c_46ef20797ee1}>
                                                                  <View style={styles.node_6fcdbd08_92b6_454f_b49f_de8c250ba540}>
                                                                                    <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} stroke="#F59E0B" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></Path><Path d="M15 18H9"></Path><Path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></Path><Circle cx="17" cy="18" r="2"></Circle><Circle cx="7" cy="18" r="2"></Circle></Svg></View>
                                                                  </View>
                                                                  <View style={styles.node_918816e1_7999_46b9_a5eb_a4d7fa3534d9}>
                                                                                    <View style={styles.node_81508d33_4c85_46a0_a4b0_26bc4933994c}>
                                                                                                        <Text style={styles.node_319d24e1_f2cb_492f_97a5_f692802145f4}>Zone D · Heavy Equipment</Text>
                                                                                                        <View style={styles.node_19195f09_5636_4510_8edb_6ae08766a1d9}>
                                                                                                                              <Text style={styles.node_d3bb78fb_7594_403c_ab46_c0ba79bc8470}>PENDING</Text>
                                                                                                        </View>
                                                                                    </View>
                                                                                    <Text style={styles.node_5acb0184_6f2b_48a3_8bc1_fdb9cb865d2a}>15 checks · not started</Text>
                                                                  </View>
                                                  </View>
                                                  <View style={[styles.node_3fc462d0_7f4c_4577_924f_67d4c3c30af9, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                    <View style={{ width: '60%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                  </View>
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
  node_bfdf793a_c3ef_4bec_9b13_e24cad57dc8c: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_ed66d0a2_0ef2_4fc3_9ff0_076085210596: {
    gap: 4,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  node_d0433e73_05dc_4c54_bc26_127204826811: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_c2dcbc37_5348_4a6b_90ce_248a3e5b5625: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 30,
  },
  node_1ff8fd5f_5358_4e39_ac03_db988e9f60b5: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_87bd5a92_0712_4768_b4aa_0e143be61266: {
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
  node_3e2b3f4b_e338_4688_9804_8d6362c31903: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
  },
  node_c7988605_0e75_4485_91c7_b0a6347ca3bb: {
    gap: 6,
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
  node_c9602876_3615_40e7_b04c_3a4f7a4f2779: {
    color: '#22C55E',
    fontWeight: 'bold',
    fontSize: 24,
  },
  node_b76a622c_7406_4bdd_98cb_0d433d9a4e37: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_bff0641d_9940_4412_b3ea_ca678f4661c0: {
    gap: 6,
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
  node_c95daad6_593d_4134_9763_b977d29a840f: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 24,
  },
  node_8bbb8323_f823_475f_90ab_249d02fba60c: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_b892ce11_d3d2_4f85_9f7f_bd6eea738ff7: {
    gap: 6,
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
  node_8c4b5c1c_86a7_4def_8dcf_8948aab97d81: {
    color: '#3B82F6',
    fontWeight: 'bold',
    fontSize: 24,
  },
  node_3d071f70_6a6d_413d_af43_3d5adea71681: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_d0f71116_b77a_47a6_a831_ff3835bae889: {
    gap: 6,
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
  node_f0c61cbe_3b56_4e68_81d0_87c5e2291c71: {
    color: '#F59E0B',
    fontWeight: 'bold',
    fontSize: 24,
  },
  node_5e058313_c8c0_4369_8268_dc292cb533c4: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_1c30def1_78f9_49e0_a394_77497eb7684b: {
    color: '#9CA3AF',
    fontWeight: '600',
    letterSpacing: 2,
    fontSize: 12,
  },
  node_c3930ac2_f41c_4ecc_afa4_064950480ac4: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":4,"shadowOpacity":0.06},
    boxShadow: '0px 2px 4px rgba(0,0,0,0.06)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_1f13ab3f_27a1_42e9_a8b7_55cf056377ef: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_92815803_8d38_41f1_b802_50aead6c2ffe: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_34164b48_6985_471c_baa3_d504f425fa5e: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_73172839_c466_4ae8_b455_0f4a6549ec90: {
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
  node_9ba6e26d_a34e_4903_9032_5cb4bd5c2713: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_44b84020_7b02_4a07_ad0d_1c03f1d83ff2: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_b3b1a7bd_aa15_4437_a15b_44446bd44a44: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#F0FDF4',
  },
  node_389e3f0f_c2bc_403c_8a5f_a9751d356381: {
    color: '#22C55E',
    fontWeight: '700',
    fontSize: 12,
  },
  node_b3201da1_10f4_4100_956a_badbab48eb7b: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_37843bf5_72c2_4d15_ac89_a0b8fdcd9c36: {
    color: '#22C55E',
  },
  node_3b470e89_2055_43ed_b6fd_ae9f27f5d235: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":4,"shadowOpacity":0.06},
    boxShadow: '0px 2px 4px rgba(0,0,0,0.06)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_c68880e4_be52_4088_ad53_35d870528ad5: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_75490759_5e77_478b_bd21_0e68b9a42bfc: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_580345ef_bfe3_459b_adba_1b665a498fa1: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_6a75af1b_0f05_461c_984b_76d602c1e525: {
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
  node_4298d14e_f95c_4622_8ecc_47a58d9cc28f: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_ca41a130_8ec5_49e7_a997_74143acb1da6: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_273a9e67_78fc_4382_b35b_a282087ab094: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#EFF6FF',
  },
  node_a712f15c_2765_419f_9f6a_44acb821cad7: {
    color: '#3B82F6',
    fontWeight: '700',
    fontSize: 12,
  },
  node_fdf33ab3_4302_47e3_a778_e536a1db610a: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_6c61d926_8cc4_4e4c_a4bc_564124e406d3: {
    color: '#3B82F6',
  },
  node_cc32e81c_8ab5_4457_b12f_3bb64b8e3f61: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":4,"shadowOpacity":0.06},
    boxShadow: '0px 2px 4px rgba(0,0,0,0.06)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_a80f67b7_cb59_4695_b9e6_8d12cbe284be: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_0c182577_5e19_48eb_aa27_57e519f7123a: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_cea1444b_9c54_43c6_8784_d4682c25b091: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_e22191fc_3975_4dbf_849a_e8d47c8b6251: {
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
  node_8f2e0dfa_f7fb_4a27_bd54_35ac9cb3e5bf: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_8582b899_71d3_4c79_9fda_eca0cce9131d: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_65f63617_64c9_422d_8424_ad09dc9183b6: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FEF2F2',
  },
  node_3a805bc8_84b8_4dfd_9e18_63d5c40f4485: {
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 12,
  },
  node_713e4abb_5693_4e23_ba80_1c11ffd65b07: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_9def3ac4_3946_4364_b448_0b9547eab88e: {
    color: '#EF4444',
  },
  node_5860e015_bd9b_48d0_b15d_e0e0164ec534: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":4,"shadowOpacity":0.06},
    boxShadow: '0px 2px 4px rgba(0,0,0,0.06)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_39e3af56_ebfc_433b_9d88_15d3af1ec45b: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_d146871f_3d8f_4c39_bd1c_46ef20797ee1: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_6fcdbd08_92b6_454f_b49f_de8c250ba540: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFBEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_918816e1_7999_46b9_a5eb_a4d7fa3534d9: {
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
  node_81508d33_4c85_46a0_a4b0_26bc4933994c: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_319d24e1_f2cb_492f_97a5_f692802145f4: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_19195f09_5636_4510_8edb_6ae08766a1d9: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FFFBEB',
  },
  node_d3bb78fb_7594_403c_ab46_c0ba79bc8470: {
    color: '#F59E0B',
    fontWeight: '700',
    fontSize: 12,
  },
  node_5acb0184_6f2b_48a3_8bc1_fdb9cb865d2a: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_3fc462d0_7f4c_4577_924f_67d4c3c30af9: {
    color: '#E5E7EB',
  },
});

