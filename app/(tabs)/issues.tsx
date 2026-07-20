import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, Modal, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Issues() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_70d7ccea_56d0_47bf_beb3_5db38807506f, setState_70d7ccea_56d0_47bf_beb3_5db38807506f] = useState({ selectedValue: "", selectedLabel: "" });
  const [state_14480edb_44d3_460c_a418_8d4f0a670b12, setState_14480edb_44d3_460c_a418_8d4f0a670b12] = useState({ selectedValue: "", selectedLabel: "" });
  const [state_fda66342_3b1b_49be_8fdf_735437fd8100, setState_fda66342_3b1b_49be_8fdf_735437fd8100] = useState({ text: "", isFocused: false });
  const [state_8dc5aa14_0b49_4aec_a16d_007bc8953995, setState_8dc5aa14_0b49_4aec_a16d_007bc8953995] = useState({ selectedValue: "", selectedLabel: "" });

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_84dca7e9_b0b6_49d4_af49_8b8297879904}>
              <View style={styles.node_a2fb8f51_12b2_4786_9ac9_b995426f2b4f}>
                        <View style={styles.node_646a2ed7_4b27_4771_8397_4996ab13d73e}>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m15 18-6-6 6-6"></Path></Svg></View>
                                    <Text style={styles.node_8ff233bd_0245_455d_8ba0_124a61e78be5}>Back to Checklist</Text>
                        </View>
                        <View style={styles.node_4188e38c_c260_4f32_b1a6_a7e619ec6534}>
                                    <Text style={styles.node_33da9d68_7276_42e6_a576_5edf6513a1ee}>Report Issue</Text>
                                    <View style={styles.node_4599e205_a11e_48de_a12e_5fa3d841cb16}>
                                                  <View style={{ width: 14, height: 14, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={14} height={14} stroke="#F97316" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></Svg></View>
                                                  <Text style={styles.node_563e867c_37ff_4b35_b16f_2599a4d329a1}>#0047</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_7564470b_bdd9_4294_bb76_fd7123dae14f}>Zone A · Bay 12 · 15 May 2026</Text>
              </View>
              <View style={styles.node_8234f811_1bed_44c7_ba1c_0734e5e299b6}>
                        <View style={styles.node_c9f91335_7724_4bfb_b95e_4abce5987017}>
                                    <View style={styles.node_5f844d7b_eb09_4097_a614_cd1f83eaf0f7}>
                                                  <Text style={styles.node_a3aa6392_7888_46ac_9238_51811ab2f0a9}>CATEGORY</Text>
                                                  {(() => { const __opts = [{"label":"Safety Hazard","value":"safety"},{"label":"Equipment Fault","value":"equipment"},{"label":"HAZMAT","value":"hazmat"}]; const [open, setOpen] = React.useState(false); const [anchor, setAnchor] = React.useState({x:0,y:0,w:0,h:0}); const triggerRef = React.useRef(null); const val = typeof state_70d7ccea_56d0_47bf_beb3_5db38807506f !== 'undefined' ? (state_70d7ccea_56d0_47bf_beb3_5db38807506f.selectedValue ?? '') : ''; const __sel = __opts.find(o => o.value === val); const __label = __sel ? __sel.label : ''; const openDropdown = () => { if (triggerRef.current && triggerRef.current.measureInWindow) { triggerRef.current.measureInWindow((x,y,w,h) => { setAnchor({x,y,w,h}); setOpen(true); }); } else { setOpen(true); } }; return (<View style={styles.node_70d7ccea_56d0_47bf_beb3_5db38807506f}><TouchableOpacity ref={triggerRef} onPress={() => { if (open) { setOpen(false); } else { openDropdown(); } }} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}><Text style={{ color: val ? '#000' : '#888' }}>{__label || 'Safety Hazard'}</Text><Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}><Path d="m6 9 6 6 6-6" /></Svg></TouchableOpacity><Modal visible={open} transparent animationType="fade" onRequestClose={() => { setOpen(false); }}><Pressable style={{ flex: 1 }} onPress={() => { setOpen(false); }}><View style={{ position: 'absolute', top: anchor.y + anchor.h + 4, left: anchor.x, width: anchor.w, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, elevation: 8, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>{__opts.map((o, i) => <TouchableOpacity key={o.value + ':' + i} onPress={() => { if (typeof setState_70d7ccea_56d0_47bf_beb3_5db38807506f === 'function') setState_70d7ccea_56d0_47bf_beb3_5db38807506f(prev => ({...prev, selectedValue: o.value, selectedLabel: o.label})); setOpen(false); }} style={{ padding: 10, borderBottomWidth: i < __opts.length - 1 ? 1 : 0, borderColor: '#eee' }}><Text>{o.label}</Text></TouchableOpacity>)}</View></Pressable></Modal></View>); })()}
                                    </View>
                                    <View style={styles.node_6a4c232a_73f9_4978_ba7c_583136a9af9f}>
                                                  <Text style={styles.node_f9d773dd_ab3e_461f_9a76_b8a75ed2371d}>LOCATION</Text>
                                                  {(() => { const __opts = [{"label":"Zone A","value":"zone_a"},{"label":"Zone B","value":"zone_b"},{"label":"Zone C","value":"zone_c"},{"label":"Zone D","value":"zone_d"}]; const [open, setOpen] = React.useState(false); const [anchor, setAnchor] = React.useState({x:0,y:0,w:0,h:0}); const triggerRef = React.useRef(null); const val = typeof state_14480edb_44d3_460c_a418_8d4f0a670b12 !== 'undefined' ? (state_14480edb_44d3_460c_a418_8d4f0a670b12.selectedValue ?? '') : ''; const __sel = __opts.find(o => o.value === val); const __label = __sel ? __sel.label : ''; const openDropdown = () => { if (triggerRef.current && triggerRef.current.measureInWindow) { triggerRef.current.measureInWindow((x,y,w,h) => { setAnchor({x,y,w,h}); setOpen(true); }); } else { setOpen(true); } }; return (<View style={styles.node_14480edb_44d3_460c_a418_8d4f0a670b12}><TouchableOpacity ref={triggerRef} onPress={() => { if (open) { setOpen(false); } else { openDropdown(); } }} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}><Text style={{ color: val ? '#000' : '#888' }}>{__label || 'Zone A'}</Text><Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}><Path d="m6 9 6 6 6-6" /></Svg></TouchableOpacity><Modal visible={open} transparent animationType="fade" onRequestClose={() => { setOpen(false); }}><Pressable style={{ flex: 1 }} onPress={() => { setOpen(false); }}><View style={{ position: 'absolute', top: anchor.y + anchor.h + 4, left: anchor.x, width: anchor.w, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, elevation: 8, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>{__opts.map((o, i) => <TouchableOpacity key={o.value + ':' + i} onPress={() => { if (typeof setState_14480edb_44d3_460c_a418_8d4f0a670b12 === 'function') setState_14480edb_44d3_460c_a418_8d4f0a670b12(prev => ({...prev, selectedValue: o.value, selectedLabel: o.label})); setOpen(false); }} style={{ padding: 10, borderBottomWidth: i < __opts.length - 1 ? 1 : 0, borderColor: '#eee' }}><Text>{o.label}</Text></TouchableOpacity>)}</View></Pressable></Modal></View>); })()}
                                    </View>
                        </View>
                        <View style={styles.node_08d77727_488d_4854_a681_74a2509cf190}>
                                    <Text style={styles.node_6f12388f_8141_4ed6_89b1_e60e5f8ae43c}>SEVERITY LEVEL</Text>
                                    <View style={styles.node_b3a623df_00c6_4401_a1e0_2c2a3756cfaa}>
                                                  <View style={styles.node_21d2bb70_8a56_4993_804a_f14a5b3a2a38}>
                                                                  <Text style={styles.node_9695ed57_04a4_4d1d_9109_6bdc72aad9ab}>LOW</Text>
                                                  </View>
                                                  <View style={styles.node_7a992ead_08d6_4e75_bb39_2ada28186f50}>
                                                                  <Text style={styles.node_f2d02cb7_ebe8_4d15_877f_7244ed341b0c}>MEDIUM</Text>
                                                  </View>
                                                  <View style={styles.node_93a882b3_31b2_41a2_ba72_3828331958bb}>
                                                                  <Text style={styles.node_c1f2e557_51d6_4322_9ccb_53356014db28}>HIGH</Text>
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_546b8aa1_91ae_4ae1_809c_1385d8061ec1}>
                                    <Text style={styles.node_e48df202_e422_4ed5_9c50_c07f6fa339b2}>DESCRIPTION</Text>
                                    <TextInput style={[styles.node_fda66342_3b1b_49be_8fdf_735437fd8100, { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 14, padding: 10, fontSize: 16, minHeight: 80, textAlignVertical: 'top', backgroundColor: '#FFFFFF' }]} placeholder="Describe the issue..." multiline value={typeof state_fda66342_3b1b_49be_8fdf_735437fd8100 !== 'undefined' ? (state_fda66342_3b1b_49be_8fdf_735437fd8100.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_fda66342_3b1b_49be_8fdf_735437fd8100 === 'function') setState_fda66342_3b1b_49be_8fdf_735437fd8100(prev => ({...prev, text: v})); }} />
                        </View>
                        <View style={styles.node_e35ba030_8f8e_4d25_920a_aaf3e5f2fddd}>
                                    <Text style={styles.node_c2d9a8e0_47e7_4838_9865_686fd6261a52}>PHOTO EVIDENCE</Text>
                                    <View style={styles.node_035a4404_792e_4520_bbbe_55536e4959fa}>
                                                  <View style={styles.node_6fcf480e_9ed6_4972_b002_7e7c4c686900}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></Path><Circle cx="12" cy="13" r="3"></Circle></Svg></View>
                                                  </View>
                                                  <View style={styles.node_3db295ee_f528_4f0f_90ce_fb3bf710f3c1}>
                                                                  <Text style={styles.node_4150be43_e59a_454d_a0ff_e533ceddc226}>Tap to capture photo</Text>
                                                                  <Text style={styles.node_36014e3d_17f7_407a_8deb_b0530efe74db}>JPG · PNG · up to 10 MB</Text>
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_3bce0c12_dc91_46df_b68a_b500e30ef16f}>
                                    <Text style={styles.node_3a066d79_c05d_49c1_95b4_6e5cf86af0d5}>ASSIGN TO</Text>
                                    {(() => { const __opts = [{"label":"Floor Supervisor — J. Malik","value":"jmalik"},{"label":"Zone Lead — R. Chen","value":"rchen"},{"label":"Safety Officer","value":"safety"}]; const [open, setOpen] = React.useState(false); const [anchor, setAnchor] = React.useState({x:0,y:0,w:0,h:0}); const triggerRef = React.useRef(null); const val = typeof state_8dc5aa14_0b49_4aec_a16d_007bc8953995 !== 'undefined' ? (state_8dc5aa14_0b49_4aec_a16d_007bc8953995.selectedValue ?? '') : ''; const __sel = __opts.find(o => o.value === val); const __label = __sel ? __sel.label : ''; const openDropdown = () => { if (triggerRef.current && triggerRef.current.measureInWindow) { triggerRef.current.measureInWindow((x,y,w,h) => { setAnchor({x,y,w,h}); setOpen(true); }); } else { setOpen(true); } }; return (<View style={styles.node_8dc5aa14_0b49_4aec_a16d_007bc8953995}><TouchableOpacity ref={triggerRef} onPress={() => { if (open) { setOpen(false); } else { openDropdown(); } }} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}><Text style={{ color: val ? '#000' : '#888' }}>{__label || 'Floor Supervisor — J. Malik'}</Text><Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}><Path d="m6 9 6 6 6-6" /></Svg></TouchableOpacity><Modal visible={open} transparent animationType="fade" onRequestClose={() => { setOpen(false); }}><Pressable style={{ flex: 1 }} onPress={() => { setOpen(false); }}><View style={{ position: 'absolute', top: anchor.y + anchor.h + 4, left: anchor.x, width: anchor.w, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, elevation: 8, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>{__opts.map((o, i) => <TouchableOpacity key={o.value + ':' + i} onPress={() => { if (typeof setState_8dc5aa14_0b49_4aec_a16d_007bc8953995 === 'function') setState_8dc5aa14_0b49_4aec_a16d_007bc8953995(prev => ({...prev, selectedValue: o.value, selectedLabel: o.label})); setOpen(false); }} style={{ padding: 10, borderBottomWidth: i < __opts.length - 1 ? 1 : 0, borderColor: '#eee' }}><Text>{o.label}</Text></TouchableOpacity>)}</View></Pressable></Modal></View>); })()}
                        </View>
              </View>
              <View style={styles.node_0db64017_5643_4bb6_8e18_de3df1d92acb}>
                        <TouchableOpacity style={[styles.node_97adcbf8_6152_4d7a_be9b_ed481367a315, { backgroundColor: 'transparent', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#0077E6', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flex: 1, color: '#0077E6', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Cancel </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.node_02e64017_26fe_4c20_a03b_aeaf91642988, { backgroundColor: '#4338CA', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Submit Report</Text>
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
  node_84dca7e9_b0b6_49d4_af49_8b8297879904: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_a2fb8f51_12b2_4786_9ac9_b995426f2b4f: {
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
  node_646a2ed7_4b27_4771_8397_4996ab13d73e: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_8ff233bd_0245_455d_8ba0_124a61e78be5: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_4188e38c_c260_4f32_b1a6_a7e619ec6534: {
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_33da9d68_7276_42e6_a576_5edf6513a1ee: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_4599e205_a11e_48de_a12e_5fa3d841cb16: {
    gap: 6,
    paddingTop: 6,
    borderColor: '#FED7AA',
    borderWidth: 1.5,
    paddingLeft: 12,
    borderRadius: 20,
    paddingRight: 12,
    paddingBottom: 6,
    backgroundColor: '#FFF7ED',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_563e867c_37ff_4b35_b16f_2599a4d329a1: {
    color: '#F97316',
    fontWeight: '700',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_7564470b_bdd9_4294_bb76_fd7123dae14f: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_8234f811_1bed_44c7_ba1c_0734e5e299b6: {
    gap: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_c9f91335_7724_4bfb_b95e_4abce5987017: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_5f844d7b_eb09_4097_a614_cd1f83eaf0f7: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_a3aa6392_7888_46ac_9238_51811ab2f0a9: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_70d7ccea_56d0_47bf_beb3_5db38807506f: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  node_6a4c232a_73f9_4978_ba7c_583136a9af9f: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_f9d773dd_ab3e_461f_9a76_b8a75ed2371d: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_14480edb_44d3_460c_a418_8d4f0a670b12: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  node_08d77727_488d_4854_a681_74a2509cf190: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_6f12388f_8141_4ed6_89b1_e60e5f8ae43c: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_b3a623df_00c6_4401_a1e0_2c2a3756cfaa: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_21d2bb70_8a56_4993_804a_f14a5b3a2a38: {
    paddingTop: 12,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_9695ed57_04a4_4d1d_9109_6bdc72aad9ab: {
    color: '#9CA3AF',
    fontWeight: '700',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_7a992ead_08d6_4e75_bb39_2ada28186f50: {
    paddingTop: 12,
    borderColor: '#F97316',
    borderWidth: 2,
    borderRadius: 14,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_f2d02cb7_ebe8_4d15_877f_7244ed341b0c: {
    color: '#F97316',
    fontWeight: '700',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_93a882b3_31b2_41a2_ba72_3828331958bb: {
    paddingTop: 12,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_c1f2e557_51d6_4322_9ccb_53356014db28: {
    color: '#9CA3AF',
    fontWeight: '700',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_546b8aa1_91ae_4ae1_809c_1385d8061ec1: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_e48df202_e422_4ed5_9c50_c07f6fa339b2: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_fda66342_3b1b_49be_8fdf_735437fd8100: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  node_e35ba030_8f8e_4d25_920a_aaf3e5f2fddd: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_c2d9a8e0_47e7_4838_9865_686fd6261a52: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_035a4404_792e_4520_bbbe_55536e4959fa: {
    gap: 12,
    paddingTop: 16,
    borderColor: '#93C5FD',
    borderWidth: 1.5,
    paddingLeft: 16,
    borderRadius: 14,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#EFF6FF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_6fcf480e_9ed6_4972_b002_7e7c4c686900: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_3db295ee_f528_4f0f_90ce_fb3bf710f3c1: {
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
  node_4150be43_e59a_454d_a0ff_e533ceddc226: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 14,
  },
  node_36014e3d_17f7_407a_8deb_b0530efe74db: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_3bce0c12_dc91_46df_b68a_b500e30ef16f: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_3a066d79_c05d_49c1_95b4_6e5cf86af0d5: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_8dc5aa14_0b49_4aec_a16d_007bc8953995: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  node_0db64017_5643_4bb6_8e18_de3df1d92acb: {
    gap: 12,
    paddingTop: 20,
    borderColor: '#E5E7EB',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_97adcbf8_6152_4d7a_be9b_ed481367a315: {
    borderRadius: 14,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_02e64017_26fe_4c20_a03b_aeaf91642988: {
    borderRadius: 14,
    backgroundColor: '#4338CA',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
});

