import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Inspect() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_adb02aab_08fb_43b5_8c5b_a091a3c71123}>
              <View style={styles.node_886924a3_d81f_4223_9dfd_39412b3d07ce}>
                        <View style={styles.node_ef16da33_28e8_4da8_a7da_206da3293a7b}>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m15 18-6-6 6-6"></Path></Svg></View>
                                    <Text style={styles.node_fef99e0d_f952_40a2_a002_b72abc83a9cc}>Dashboard</Text>
                        </View>
                        <View style={styles.node_05f7742a_82a7_4a02_a46e_03fd8cd8df73}>
                                    <Text style={styles.node_6fe4be62_61bb_4779_86b6_ad4130450dfb}>Zone A Inspection</Text>
                                    <View style={styles.node_b406c20b_3ffe_4f69_a6f4_d61df861c862}>
                                                  <Text style={styles.node_8aa7651f_c879_49ab_9eee_c26ba92af420}>60%</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_ec332ff9_6c4b_4538_8dc9_5c65fb34f161}>6 of 10 checked · Receiving Dock</Text>
                        <View style={[styles.node_dc99ad38_774f_43f4_a337_4b47d5472e35, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                          <View style={{ width: '60%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                        </View>
              </View>
              <View style={styles.node_4bfceb71_adf2_4346_a028_a7526046ac72}>
                        <Text style={styles.node_32995876_7346_48c9_b320_3bcd2b501ded}>Emergency exit paths clear and unobstructed</Text>
                        <View style={styles.node_86fc5e3a_041d_4974_98ff_92e0bc1b6ec2}>
                                    <View style={styles.node_9034650f_30ed_49a8_82ca_e3f12566e5bb}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></Svg></View>
                                    </View>
                                    <View style={styles.node_f655b3fb_3790_4c5f_b68e_e9d364216fda}>
                                                  <Text style={styles.node_910beafe_ebd4_45e1_99b9_d318f49a7200}>Fire extinguishers mounted and in-date</Text>
                                                  <Text style={styles.node_a4d31030_b98a_4181_a29d_ee10530814e2}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_15d6b72f_463b_45d1_b20f_d36d0f5b444d}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_4f7045c8_ce09_4768_ba14_08302e982edb}>
                                    <View style={styles.node_6b45c793_4f5d_4528_9e65_5a711804e2c3}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></Svg></View>
                                    </View>
                                    <View style={styles.node_76c6f12b_a83b_4cb6_a49e_e162f9d2a3a0}>
                                                  <Text style={styles.node_acc187e1_828f_4afd_b7a0_c13f91ba54bc}>First aid kit stocked and accessible</Text>
                                                  <Text style={styles.node_5eb6631d_f949_4cd6_8424_21838fe23b9e}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_9f74fb7c_943a_4f04_8b16_975c10152b4a}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_cc4c2208_8bc9_422a_bba3_1adf6abea8fc}>
                                    <View style={styles.node_a3fee349_9007_48ae_a489_3263e568c421}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></Svg></View>
                                    </View>
                                    <View style={styles.node_8bcb9fd9_1b32_4b06_8c85_a0b6846831ff}>
                                                  <Text style={styles.node_ead8ea8e_b40f_4826_8798_f8eae7729add}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_87dfec43_cd36_4d9a_b622_9df4a8d7d07e}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_74761276_0fe8_4c2b_875f_74ffb7b71bef}>
                                    <View style={styles.node_104a6175_0be3_47d2_8b0f_cd5687115cc8}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></Svg></View>
                                    </View>
                                    <View style={styles.node_887af0fb_6288_4bbd_98e8_34a55a61f018}>
                                                  <Text style={styles.node_fb9aef2c_55db_41d6_84a7_49786be557c0}>Forklift charging station clear of debris</Text>
                                                  <Text style={styles.node_9f9fe168_f4b8_40ff_bdf3_b35883899fb1}>EQUIPMENT</Text>
                                    </View>
                                    <View style={styles.node_5d743e31_d5ec_491a_b632_73ce08c3960c}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_9250e81b_f1bc_4a3f_b887_660c30bba360}>
                                    <View style={styles.node_fc95e933_f8aa_4b28_9df5_acb30c3f9e80}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></Svg></View>
                                    </View>
                                    <View style={styles.node_61c32857_3269_4674_8650_be74f8e4f860}>
                                                  <Text style={styles.node_a7278dc3_5c8b_405c_a86b_043197b0ebc0}>Pallet racking load limits posted</Text>
                                                  <Text style={styles.node_c2e6c389_2a5a_4082_be34_50bf061a88df}>STORAGE</Text>
                                    </View>
                                    <View style={styles.node_032656b6_8805_4d83_a99b_9f5890623ced}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_56c1778f_b353_4f6b_978f_99eea662ecce}>
                                    <View style={styles.node_a03063a0_df07_4470_8fe2_fa22c5ea7a6e}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M18 6 6 18"></Path><Path d="m6 6 12 12"></Path></Svg></View>
                                    </View>
                                    <View style={styles.node_6e7065e8_5576_49cf_b1d5_51524a4523f6}>
                                                  <Text style={styles.node_01e81ee8_559a_4f92_8c8b_c671af2aa18c}>Hazardous materials stored correctly</Text>
                                                  <Text style={styles.node_19888041_0d5a_4c2f_aa4c_2f770751803b}>HAZMAT</Text>
                                    </View>
                                    <View style={styles.node_5587c20e_cbe1_4206_815e_5a502e8041e4}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_e970cef5_6a93_4a39_8252_739b95efb2d4}>
                                    <View style={styles.node_d8bef7fb_bb79_4af0_acb4_041246eda599}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle></Svg></View>
                                    </View>
                                    <View style={styles.node_38606df5_9aea_4842_bf56_fb689ead9122}>
                                                  <Text style={styles.node_415ef565_3d04_402e_9a9a_6ff7af094d18}>Loading dock bay doors functional</Text>
                                                  <Text style={styles.node_07c23858_cb73_4f64_acf2_3558385b1c1e}>EQUIPMENT</Text>
                                    </View>
                                    <View style={styles.node_7c743bdd_acdb_4900_a909_3a3c6b395f97}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_4d083b48_ea1e_4262_a3c4_3cc2bb895fbf}>
                                    <View style={styles.node_d24670ff_e6be_4ad2_abfb_0533e2ad444d}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle></Svg></View>
                                    </View>
                                    <View style={styles.node_7236a6f8_058a_4a46_b6e5_558ff491ae84}>
                                                  <Text style={styles.node_1fa74c61_a0fa_4ba9_a308_f1e5c3b54993}>Floor markings visible and intact</Text>
                                                  <Text style={styles.node_abb40e2d_3e1d_4d5b_8846_31f03172474f}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_57d4c777_d7c9_453d_83ea_87e5f7061c5d}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_38cfa0a3_7682_4cbb_937a_ede93a6d41e9}>
                                    <View style={styles.node_0160f221_d456_4275_8fa3_1d7ab2477f73}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle></Svg></View>
                                    </View>
                                    <View style={styles.node_b924f0bd_cda6_4cff_8e42_f8fd04fc3b0b}>
                                                  <Text style={styles.node_c8a31d73_7291_479e_bc76_4d9b68c02537}>Sprinkler system unobstructed</Text>
                                                  <Text style={styles.node_5bfae2f9_7821_4d95_9f78_2d0e4dc3a0ed}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_037cdc04_efcb_4ae7_a39e_e6aff742dcf2}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_6f7266e6_de06_4ab9_8964_7902ad8f7e22}>
                                    <View style={styles.node_50ab316c_2057_4664_a5b0_062ee1ebdd80}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle></Svg></View>
                                    </View>
                                    <View style={styles.node_857c2cc7_cd97_4310_96a9_beafa1f67ce6}>
                                                  <Text style={styles.node_88cffa30_44c2_4060_b335_a2a421bca322}>PPE station stocked and labelled</Text>
                                                  <Text style={styles.node_1685e214_3942_401e_be0c_853c2960bb09}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_737eb1d7_02a3_4566_b1b7_6c2a00814fe5}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                    </View>
                        </View>
              </View>
              <View style={styles.node_b6df274f_7bfc_4818_bd5c_3d69192cb37b}>
                        <TouchableOpacity style={[styles.node_c0a4af03_9c81_41cb_818e_cd0b37cf22f2, { backgroundColor: '#4338CA', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>+ Flag Issue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.node_f82fb15e_3831_4f47_ae5b_8050426c3eb9, { backgroundColor: 'transparent', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#0077E6', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flex: 1, color: '#0077E6', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Summary</Text>
                        </TouchableOpacity>
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
  node_adb02aab_08fb_43b5_8c5b_a091a3c71123: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_886924a3_d81f_4223_9dfd_39412b3d07ce: {
    gap: 8,
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  node_ef16da33_28e8_4da8_a7da_206da3293a7b: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_fef99e0d_f952_40a2_a002_b72abc83a9cc: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_05f7742a_82a7_4a02_a46e_03fd8cd8df73: {
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_6fe4be62_61bb_4779_86b6_ad4130450dfb: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_b406c20b_3ffe_4f69_a6f4_d61df861c862: {
    paddingTop: 6,
    paddingLeft: 14,
    borderRadius: 20,
    paddingRight: 14,
    paddingBottom: 6,
    backgroundColor: '#EEF2FF',
  },
  node_8aa7651f_c879_49ab_9eee_c26ba92af420: {
    color: '#4338CA',
    fontWeight: '700',
    fontSize: 14,
  },
  node_ec332ff9_6c4b_4538_8dc9_5c65fb34f161: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_dc99ad38_774f_43f4_a337_4b47d5472e35: {
    color: '#4338CA',
  },
  node_4bfceb71_adf2_4346_a028_a7526046ac72: {
    gap: 10,
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_32995876_7346_48c9_b320_3bcd2b501ded: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_86fc5e3a_041d_4974_98ff_92e0bc1b6ec2: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_9034650f_30ed_49a8_82ca_e3f12566e5bb: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_f655b3fb_3790_4c5f_b68e_e9d364216fda: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_910beafe_ebd4_45e1_99b9_d318f49a7200: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 18,
  },
  node_a4d31030_b98a_4181_a29d_ee10530814e2: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_15d6b72f_463b_45d1_b20f_d36d0f5b444d: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_4f7045c8_ce09_4768_ba14_08302e982edb: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_6b45c793_4f5d_4528_9e65_5a711804e2c3: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_76c6f12b_a83b_4cb6_a49e_e162f9d2a3a0: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_acc187e1_828f_4afd_b7a0_c13f91ba54bc: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_5eb6631d_f949_4cd6_8424_21838fe23b9e: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_9f74fb7c_943a_4f04_8b16_975c10152b4a: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_cc4c2208_8bc9_422a_bba3_1adf6abea8fc: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_a3fee349_9007_48ae_a489_3263e568c421: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_8bcb9fd9_1b32_4b06_8c85_a0b6846831ff: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_ead8ea8e_b40f_4826_8798_f8eae7729add: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_87dfec43_cd36_4d9a_b622_9df4a8d7d07e: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_74761276_0fe8_4c2b_875f_74ffb7b71bef: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_104a6175_0be3_47d2_8b0f_cd5687115cc8: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_887af0fb_6288_4bbd_98e8_34a55a61f018: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_fb9aef2c_55db_41d6_84a7_49786be557c0: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_9f9fe168_f4b8_40ff_bdf3_b35883899fb1: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_5d743e31_d5ec_491a_b632_73ce08c3960c: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_9250e81b_f1bc_4a3f_b887_660c30bba360: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_fc95e933_f8aa_4b28_9df5_acb30c3f9e80: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_61c32857_3269_4674_8650_be74f8e4f860: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_a7278dc3_5c8b_405c_a86b_043197b0ebc0: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_c2e6c389_2a5a_4082_be34_50bf061a88df: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_032656b6_8805_4d83_a99b_9f5890623ced: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_56c1778f_b353_4f6b_978f_99eea662ecce: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#FECACA',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FEF2F2',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_a03063a0_df07_4470_8fe2_fa22c5ea7a6e: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_6e7065e8_5576_49cf_b1d5_51524a4523f6: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_01e81ee8_559a_4f92_8c8b_c671af2aa18c: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_19888041_0d5a_4c2f_aa4c_2f770751803b: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_5587c20e_cbe1_4206_815e_5a502e8041e4: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_e970cef5_6a93_4a39_8252_739b95efb2d4: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_d8bef7fb_bb79_4af0_acb4_041246eda599: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_38606df5_9aea_4842_bf56_fb689ead9122: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_415ef565_3d04_402e_9a9a_6ff7af094d18: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_07c23858_cb73_4f64_acf2_3558385b1c1e: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_7c743bdd_acdb_4900_a909_3a3c6b395f97: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_4d083b48_ea1e_4262_a3c4_3cc2bb895fbf: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_d24670ff_e6be_4ad2_abfb_0533e2ad444d: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_7236a6f8_058a_4a46_b6e5_558ff491ae84: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_1fa74c61_a0fa_4ba9_a308_f1e5c3b54993: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_abb40e2d_3e1d_4d5b_8846_31f03172474f: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_57d4c777_d7c9_453d_83ea_87e5f7061c5d: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_38cfa0a3_7682_4cbb_937a_ede93a6d41e9: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_0160f221_d456_4275_8fa3_1d7ab2477f73: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_b924f0bd_cda6_4cff_8e42_f8fd04fc3b0b: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_c8a31d73_7291_479e_bc76_4d9b68c02537: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_5bfae2f9_7821_4d95_9f78_2d0e4dc3a0ed: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_037cdc04_efcb_4ae7_a39e_e6aff742dcf2: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_6f7266e6_de06_4ab9_8964_7902ad8f7e22: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_50ab316c_2057_4664_a5b0_062ee1ebdd80: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_857c2cc7_cd97_4310_96a9_beafa1f67ce6: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_88cffa30_44c2_4060_b335_a2a421bca322: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_1685e214_3942_401e_be0c_853c2960bb09: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_737eb1d7_02a3_4566_b1b7_6c2a00814fe5: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_b6df274f_7bfc_4818_bd5c_3d69192cb37b: {
    gap: 12,
    paddingTop: 16,
    borderColor: '#E5E7EB',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_c0a4af03_9c81_41cb_818e_cd0b37cf22f2: {
    borderRadius: 14,
    backgroundColor: '#4338CA',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_f82fb15e_3831_4f47_ae5b_8050426c3eb9: {
    borderRadius: 14,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
});

