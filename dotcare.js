// ============================================================================
// بنك تحاليل DotCare التخصصية الإضافية (dotcare.js)
// ============================================================================

const DOTCARE_EXTRA_TESTS = [
    {
        name: "فوسفاتيز حمضي (ACID PHOSPHATASE) [204003]",
        test: (t) => /acid\s*phosphatase|204003|\bacp\b/i.test(t),
        getNotes: () => `سيرم، ليس له شروط والعينة لا تتطلب صياماً.`
    },
    {
        name: "هرمون موجه للغدة الجار كظرية مسائي (ACTH P.M) [2100010]",
        test: (t) => /acth\s*\(?p\.?m\)?|2100010/i.test(t),
        getNotes: () => `يسحب مساءً بدقة (8 - 9 مساءً) مع راحة تامة للمريض 30 دقيقة قبل السحب وتُنقل العينة مثلجة فوراً. Frozen EDTA Plasma.`
    },
    {
        name: "هرمون موجه للغدة الجار كظرية صباحي (ACTH MORNING) [210004]",
        test: (t) => /acth\s*morning|acth\s*\(?a\.?m\)?|210004/i.test(t),
        getNotes: () => `يسحب صباحاً بدقة (8 - 9 صباحاً) مع راحة تامة 30 دقيقة وتجنب التوتر، وتُنقل العينة مثلجة فوراً. Frozen EDTA Plasma.`
    },
    {
        name: "مقاومة البروتين سي المنشط (ACTIVATED PROTEIN C RESISTANCE) [209001]",
        test: (t) => /activated\s*protein\s*c|apcr|209001/i.test(t),
        getNotes: () => `مطلوب تسجيل الشكوى والسن وللسيدات هل يوجد حمل؟ وهل يوجد علاج سيولة واسمه؟ العينة Citrated plasma.`
    },
    {
        name: "أداليموماب والأجسام المضادة (Adalimumab Trough level) [Root LABService290]",
        test: (t) => /adalimumab|humira/i.test(t),
        getNotes: () => `تسحب العينة قبل موعد جرعة الدواء التالية مباشرة (Trough Level) لقياس أدنى تركيز في الدم بدقة. العينة سيرم.`
    },
    {
        name: "إنزيم أدامتس (ADAMTS13) [3035710]",
        test: (t) => /adamts/i.test(t),
        getNotes: () => `Frozen serum يفضل أخذ العينة قبل البدء في نقل البلازما أو أخذ العلاجات المثبطة للمناعة.`
    },
    {
        name: "أدينوزين ديميناز (ADENOSINE-DEAMINASE) [204004]",
        test: (t) => /adenosine-?deaminase|\bada\b|204004/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام. ترسل العينة للمختبر فوراً وتفصل سريعاً لتفادي تحلل الإنزيم.`
    },
    {
        name: "الهرمون المانع لإدرار البول (ADH) [210005]",
        test: (t) => /\badh\b|antidiuretic|vasopressin|210005/i.test(t),
        getNotes: () => `Frozen EDTA plasma لا يحتاج إلى صيام.`
    },
    {
        name: "أجسام مضادة لقشرة الكظر (Adrenal cortical antibodies) [Root LABService289]",
        test: (t) => /adrenal\s*cortical/i.test(t),
        getNotes: () => `لا يشترط الصيام التام، ويفضل تجنب الأطعمة الدسمة قبل السحب بعدة ساعات. العينة Serum frozen.`
    },
    {
        name: "زلال سائل الاستسقاء (ALBUMIN IN ASCITIC FLUID) [Root LABService77]",
        test: (t) => /albumin\s*in\s*ascitic/i.test(t),
        getNotes: () => `عينة سائل استسقاء تجمع بمعرفة الطبيب، وترسل فوراً للمختبر مع عينة دم متزامنة لحساب SAAG.`
    },
    {
        name: "زلال البول النوعي (ALBUMIN IN URINE [QUALITATIVE]) [221003]",
        test: (t) => /albumin\s*in\s*urine|221003/i.test(t),
        getNotes: () => `عينة بول صباحية أولى نظيفة، مع تجنب التمارين الرياضية الشاقة قبل التحليل.`
    },
    {
        name: "نسبة الزلال إلى الجلوبيولين (A/G RATIO) [2040018]",
        test: (t) => /albumin\/\s*globulin|a\/g\s*ratio|2040018/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويفضل تجنب الوجبات الدسمة قبل سحب الدم مباشرة.`
    },
    {
        name: "نسبة الزلال إلى الكرياتينين في البول (ALBUMIN/CREATININE RATIO) [221004]",
        test: (t) => /albumin\/creatinine|\bacr\b|microalbumin|221004/i.test(t),
        getNotes: () => `عينة بول صباحية أولى نظيفة، وتجنب الإجهاد العضلي الشديد قبل الفحص بـ 24 ساعة.`
    },
    {
        name: "كحول الدم (ALCOHOL IN BLOOD) [207001]",
        test: (t) => /alcohol\s*in\s*blood|207001/i.test(t),
        getNotes: () => `تنبيه هام: يمنع تطهير موضع الوخز بمسحات الكحول الطبية ويستبدل بمطهر كاليود أو الماء والصابون.`
    },
    {
        name: "كحول اللعاب (ALCOHOL IN SALIVA) [207002]",
        test: (t) => /alcohol\s*in\s*saliva|207002/i.test(t),
        getNotes: () => `الامتناع عن الأكل والشرب والتدخين وغسول الفم لمدة 15 إلى 20 دقيقة قبل أخذ المسحة.`
    },
    {
        name: "كحول البول (Alcohol in urine) [Root LABService15]",
        test: (t) => /alcohol\s*in\s*urine/i.test(t),
        getNotes: () => `عينة بول نظيفة في عبوة محكمة الإغلاق لمنع تطاير الكحول وتسلم للمختبر فوراً.`
    },
    {
        name: "إنزيم ألدولاز (ALDOLASE) [204006]",
        test: (t) => /aldolase|204006/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "هرمون ألدوستيرون (ALDOSTERONE) [210006]",
        test: (t) => /aldosterone|210006/i.test(t),
        getNotes: () => `سحب صباحاً (8 - 10) بعد الاستلقاء 20-30 دقيقة. إيقاف مدرات البول والضغط والعرقسوس لـ 2-3 أسابيع حسب تعليمات الطبيب.`
    },
    {
        name: "نسبة الألدوستيرون إلى الرينين (ALDOSTERONE RENIN RATIO) [204007]",
        test: (t) => /aldosterone\s*renin|\barr\b|204007/i.test(t),
        getNotes: () => `سحب صباحي بعد استلقاء 20-30 دقيقة مع إيقاف أدوية الضغط ومدرات البول بالتنسيق مع الطبيب.`
    },
    {
        name: "فوسفاتاز قلوي (ALKALINE PHOSPHATASE - ALP) [204008]",
        test: (t) => /alkaline\s*phosphatase|\balp\b|204008/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "ألفا جلوكوزيداز في السائل المنوي (ALPHA GLUCOSIDASE) [Root LABService80]",
        test: (t) => /alpha\s*glucosidase/i.test(t),
        getNotes: () => `عينة سائل منوي معقمة، يشترط الامتناع عن القذف لمدة 3 إلى 5 أيام قبل التحليل.`
    },
    {
        name: "ألفا 1 ميكروجلوبيولين (ALPHA-1 MICROGLOBULIN) [204010]",
        test: (t) => /alpha-?1\s*microglobulin|204010/i.test(t),
        getNotes: () => `لا يشترط الصيام لعينة الدم، أما في عينة البول فتؤخذ عينة صباحية أولى نظيفة.`
    },
    {
        name: "ألفا 1 أنتي تريبسين (ALPHA-1-ANTITRYPSIN) [204009]",
        test: (t) => /alpha-?1-?antitrypsin|\baat\b|204009/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "ألفا فيتو بروتين (ALPHA-FETOPROTEIN [AFP]) [220001]",
        test: (t) => /alpha-?fetoprotein|\bafp\b|220001/i.test(t),
        getNotes: () => `لا يشترط الصيام. إذا كان لمتابعة الحمل فيجب تسجيل العمر الجنيني وتاريخ آخر دورة.`
    },
    {
        name: "مستوى الألومنيوم في الدم (ALUMINIUM LEVEL) [Root LABService81]",
        test: (t) => /aluminium|aluminum/i.test(t),
        getNotes: () => `يمنع تناول أدوية الحموضة المحتوية على ألومنيوم قبل الفحص بيوم، سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "مخطط الأحماض الأمينية بالبلازما (AMINOGRAM [PLASMA]) [Root LABService82]",
        test: (t) => /aminogram\s*\(?plasma\)?/i.test(t),
        getNotes: () => `لا يشترط صيام والعينة: 2 tubes EDTA Plasma + 2 tubes Heparinized Plasma.`
    },
    {
        name: "مخطط الأحماض الأمينية بالبول (AMINOGRAM [URINE]) [Root LABService83]",
        test: (t) => /aminogram\s*\(?urine\)?/i.test(t),
        getNotes: () => `عينة بول صباحية أولى أو تجميع 24 ساعة حسب إرشادات الطبيب.`
    },
    {
        name: "حمض أمينوليفيولينيك في البول (aminolevulinic acid in urine) [4535762]",
        test: (t) => /aminolevulinic|delta\s*ala|4535762/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة في وعاء معتم مع 0.1 ملي حمض أسيتيك، مع حمايته من الضوء وحفظه بارداً.`
    },
    {
        name: "أمونيا الدم (AMMONIA) [204011]",
        test: (t) => /ammonia|204011/i.test(t),
        getNotes: () => `EDTA لا تحتاج إلى صيام، تسحب على ثلج وتفصل خلال 15 دقيقة.`
    },
    {
        name: "إنزيم أميليز (AMYLASE) [204012]",
        test: (t) => /amylase|204012/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "بروتين أميلويد أ (AMYLOID A PROTEIN) [204013]",
        test: (t) => /amyloid\s*a|204013/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "أميلويد بيتا 1-42 (Amyloid beta 1-42) [3435759]",
        test: (t) => /amyloid\s*beta|3435759/i.test(t),
        getNotes: () => `عينة سائل نخاع شوكي (CSF) تجمع بمعرفة الطبيب في أنابيب بولي بروبيلين وتجمد فوراً.`
    },
    {
        name: "لطخة مناعية للأجسام المضادة للنواة (ANA immunoplot) [Root LABService275]",
        test: (t) => /ana\s*immunoplot|ana\s*microblot/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "هرمون أندروستينيديون (ANDROSTENEDIONE) [210007]",
        test: (t) => /androstenedione|210007/i.test(t),
        getNotes: () => `يفضل سحبه صباحاً. للسيدات: يفضل إجراؤه في الأسبوع الأول بعد بدء الدورة الشهرية.`
    },
    {
        name: "فجوة الأنيونات (ANION GAP) [204014]",
        test: (t) => /anion\s*gap|204014/i.test(t),
        getNotes: () => `Frozen serum أو Frozen Heparinized plasma مع مراعاة الفصل الفوري بعد السحب، لا يحتاج لصيام.`
    },
    {
        name: "أجسام مضادة للكارديوليبين cardiolipin IgG [201015]",
        test: (t) => /cardiolipin\s*igg|201015/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "أجسام مضادة للكارديوليبين cardiolipin IgM [201016]",
        test: (t) => /cardiolipin\s*igm|201016/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "أجسام مضادة للإنسولين (ANTI - INSULIN AB) [201017]",
        test: (t) => /anti\s*-?\s*insulin|201017/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "أجسام مضادة جو-1 (ANTI - JO- 1) [201018]",
        test: (t) => /anti\s*-?\s*jo-?\s*1|201018/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "أجسام مضادة SSA / Ro [201019]",
        test: (t) => /anti\s*-?\s*ssa|anti-?ro|201019/i.test(t),
        getNotes: () => `سيرم لا يحتاج إلى صيام.`
    },
    {
        name: "أجسام مضادة SSB / La [201020]",
        test: (t) => /anti\s*-?\s*ssb|anti-?la|201020/i.test(t),
        getNotes: () => `لا يشترط الصيام، ويجرى بالتزامن مع Anti-SSA لتأكيد تشخيص الأمراض المناعية الذاتية.`
    },
    {
        name: "أجسام مضادة للأنيكسين V نوع annexin IgG [Root LABService302]",
        test: (t) => /annexin\s*v\s*igg/i.test(t),
        getNotes: () => `لا يشترط الصيام، ويفضل تسجيل التاريخ الدوائي لأدوية السيولة.`
    },
    {
        name: "أجسام مضادة للأنيكسين V نوع annexin IgM [Root LABService303]",
        test: (t) => /annexin\s*v\s*igm/i.test(t),
        getNotes: () => `لا يشترط الصيام، ويقيس الأجسام المضادة لقابلية التخثر وفقدان الحمل المبكر.`
    },
    {
        name: "أجسام مضادة للغشاء القاعدي (ANTI BASMENT MEMBRANE) [2040011]",
        test: (t) => /basment\s*membrane|\bgbm\b|2040011/i.test(t),
        getNotes: () => `لا يشترط الصيام، ويفضل أخذ العينة قبل البدء في جلسات الغسيل الكلوي أو فصل البلازما.`
    },
    {
        name: "أجسام مضادة للبلهارسيا (ANTI BILHARZIAL ANTIBODIES) [215001]",
        test: (t) => /bilharzial|bilharzia|215001/i.test(t),
        getNotes: () => `لا يشترط الصيام التام، وتجمع عينة دم وريدي للكشف عن الأجسام المضادة لعدوى البلهارسيا.`
    },
    {
        name: "أجسام مضادة للسنترومير (ANTI CENTROMERE AB) [201022]",
        test: (t) => /centromere|201022/i.test(t),
        getNotes: () => `لا يشترط الصيام، ويطلب لتشخيص متلازمة كرست (CREST) والتصلب الجلدي المناعي.`
    },
    {
        name: "أجسام مضادة للديسموجلين 1 (Anti D3G1 Ab IgG) [Root LABService305]",
        test: (t) => /d3g1|dsg1|desmoglein\s*1/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويستخدم لتشخيص ومتابعة أمراض الفقاع الجلدي المناعي.`
    },
    {
        name: "أجسام مضادة للديسموجلين 3 (Anti D3G3 Ab) [Root LABService304]",
        test: (t) => /d3g3|dsg3|desmoglein\s*3/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويطلب لتشخيص مرض الفقاع الشائع وإصابات الأغشية المخاطية.`
    },
    {
        name: "أجسام مضادة للجليادين منزوع الأميد Anti DGP IgA [2110002]",
        test: (t) => /dgp\s*iga|2110002/i.test(t),
        getNotes: () => `لا يشترط الصيام، يشترط عدم التوقف عن تناول الجلوتين قبل التحليل لتفادي السلبية الكاذبة.`
    },
    {
        name: "أجسام مضادة للجليادين منزوع الأميد Anti DGP IgG [2110001]",
        test: (t) => /dgp\s*igg|2110001/i.test(t),
        getNotes: () => `لا يشترط الصيام، يشترط استمرار المريض في نظامه الغذائي الطبيعي المحتوي على الجلوتين.`
    },
    {
        name: "معيار الأجسام المضادة للحمض النووي مزدوج السلسلة (ANTI dsDNA TITER) [2040012]",
        test: (t) => /double\s*stranaded|dsdna|2040012/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويطلب لمتابعة نشاط مرض الذئبة الحمراء والتهاب الكلى الذئبي.`
    },
    {
        name: "نشاط مضاد العامل العاشر (ANTI- FACTOR X A ACTIVITY) [209002]",
        test: (t) => /factor\s*x\s*a|factor\s*xa|209002/i.test(t),
        getNotes: () => `يجب سحب العينة بعد 6 ساعات بالضبط من حقنة الهيبارين مع تسجيل توقيت الجرعة بدقة والنوع. Citrated Plasma.`
    },
    {
        name: "أجسام مضادة للفاشيولا (ANTI FASCIOLA AB) [215002]",
        test: (t) => /fasciola|215002/i.test(t),
        getNotes: () => `لا يشترط الصيام التام، ويفحص وجود الأجسام المضادة لدودة الكبد في الدم.`
    },
    {
        name: "أجسام مضادة لـ GAD في السائل النخاعي (Anti GAD in CSF) [2533610]",
        test: (t) => /gad\s*in\s*csf|2533610/i.test(t),
        getNotes: () => `عينة سائل نخاع شوكي (CSF) تسحب تحت تعقيم كامل وتُنقل مثلجة للمختبر فوراً.`
    },
    {
        name: "أجسام مضادة للخلايا الجدارية للمعدة (ANTI GASTRIC PARIETAL AB) [201023]",
        test: (t) => /gastric\s*parietal|\bapca\b|201023/i.test(t),
        getNotes: () => `لا يشترط الصيام التام. يطلب لتشخيص الأنيميا الخبيثة ونقص B12.`
    },
    {
        name: "أجسام مضادة لنازع كربوكسيل حمض الجلوتاميك (Anti-GAD) [204015]",
        test: (t) => /glutamic\s*acid\s*decarboxylase|anti-?gad|204015/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام.`
    },
    {
        name: "أجسام مضادة للمكورات المشوكة / الأكياس المائية (ANTI HYDATID AB) [215003]",
        test: (t) => /hydatid|echinococcus|215003/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، وتفحص الأجسام المضادة لأكياس الطفيليات المائية في الكبد والرئة.`
    },
    {
        name: "أجسام مضادة للكيراتين (ANTI KERATIN AB [AKA]) [201024]",
        test: (t) => /keratin\s*ab|\baka\b|201024/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويعد مؤشراً لتشخيص الروماتويد المفصلي المبكر.`
    },
    {
        name: "أجسام مضادة لميكروسومات الكبد والكلى (ANTI LKM) [201002]",
        test: (t) => /anti\s*lkm|liver\s*kidney\s*microsome|201002/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويطلب لتشخيص التهاب الكبد المناعي الذاتي النوع الثاني.`
    },
    {
        name: "معيار أجسام مضادة لميكروسومات الكبد والكلى (ANTI LKM TITER) [2040014]",
        test: (t) => /lkm\s*titer|2040014/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويقيس عيار الأجسام المضادة بالتخفيف لمتابعة نشاط المرض الكبدي.`
    },
    {
        name: "أجسام مضادة للميالين قليل التغصن (Anti MOG) [Root LABService16]",
        test: (t) => /anti\s*mog|myelin\s*oligodendrocyte/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويفضل أخذ العينة قبل البدء في العلاج بالكورتيزون.`
    },
    {
        name: "هرمون مخزون المبيض (ANTI MULLARIAN HORMONE [AMH]) [210008]",
        test: (t) => /mullarian|\bamh\b|210008/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويمكن إجراؤه في أي يوم من أيام الدورة الشهرية دون التقيد بوقت محدد.`
    },
    {
        name: "أجسام مضادة للميلوبيروكسيداز (MPO / P-ANCA) [3535816]",
        test: (t) => /myeloperoxidase|\bmpo\b|p-?anca|3535816/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويطلب لتشخيص التهابات الأوعية الدموية المناعية.`
    },
    {
        name: "أجسام مضادة عصبية (ANTI NEURONAL AB) [201025]",
        test: (t) => /anti\s*neuronal|201025/i.test(t),
        getNotes: () => `سيرم لا يشترط الصيام، ويطلب لتقييم المتلازمات العصبية المصاحبة للأورام.`
    },
    {
        name: "أجسام مضادة لمستقبلات NMDA [209003]",
        test: (t) => /nmda|209003/i.test(t),
        getNotes: () => `تجمع عينة دم (سيرم) أو سائل نخاع شوكي (CSF) لتشخيص التهاب الدماغ المناعي الذاتي.`
    },
    {
        name: "أجسام مضادة للصفائح الدموية (ANTI PLATELET ANTIBODIES) [209074]",
        test: (t) => /platelet\s*antibodies|209074/i.test(t),
        getNotes: () => `لا يشترط الصيام، ويطلب لتشخيص أسباب تكسر ونقص الصفائح الدموية المناعي (ITP). سيرم.`
    },
    {
        name: "أجسام مضادة لبروتيناز 3 (PR3 / C-ANCA) [3535817]",
        test: (t) => /proteinase\s*iii|proteinase\s*3|\bpr3\b|c-?anca|3535817/i.test(t),
        getNotes: () => `لا يشترط الصيام، وهو الفحص الأساسي لتشخيص ورم غرانولوماتوزي ويغنري الوعائي. سيرم.`
    },
    {
        name: "أجسام مضادة للريتيكولين (ANTI RETICULIN AB) [201026]",
        test: (t) => /reticulin|201026/i.test(t),
        getNotes: () => `يشترط عدم التوقف عن تناول الأطعمة التي تحتوي على الجلوتين، لتشخيص السيلياك وحساسية القمح بدقة.`
    },
    {
        name: "معيار الأجسام المضادة لعامل ريسوس (ANTI RH AB TITER) [201027]",
        test: (t) => /anti\s*rh\b|rh\s*titer|indirect\s*coombs|201027/i.test(t),
        getNotes: () => `خاص بالحوامل ذوات الفصيلة السالبة، لا يشترط الصيام، ويُسجل العمر الجنيني ومواعيد حقنة Anti-D بدقة.`
    },
    {
        name: "بروتوبورفيرين في البول (PROTOPORPHYRIN IN URINE) [2835746]",
        test: (t) => /protoporphyrin\s*in\s*urine|urine\s*protoporphyrin|2835746/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة في وعاء قاتم محمي تماماً من الضوء عند 2-8°C؛ لتشخيص البورفيريا والتسمم بالرصاص.`
    },
    {
        name: "هرمون الغدة جار الدرقية السليم (PTH - INTACT) [210035]",
        test: (t) => /pth\s*[-_ ]?\s*intact|intact\s*pth|210035/i.test(t),
        getNotes: () => `بلازما EDTA أو سيرم صباحي تُفصل وتُجمد فوراً ولا يحتاج الى صيام؛ لتقييم اضطرابات الكالسيوم وجارات الدرقية.`
    },
    {
        name: "الببتيد المرتبط بهرمون جار الدرقية (PTH RELATED PEPTIDE) [2100011]",
        test: (t) => /pth\s*related\s*peptide|pth[-_ ]?rp|2100011/i.test(t),
        getNotes: () => `بلازما EDTA مبردة ومضاف إليها مثبط للإنزيمات ولا يحتاج الى صيام؛ لتشخيص فرط كالسيوم الدم الخبيث الناتج عن الأورام.`
    },
    {
        name: "البروتين المرتبط بهرمون الغدة جار الدرقية (PTH –related protein) [2040048]",
        test: (t) => /pth\s*[\u2013-]?\s*related\s*protein|2040048/i.test(t),
        getNotes: () => `لا يحتاج الى صيام، بلازما أو سيرم مبرد سريعاً؛ لتقييم الإفراز الوريمي النتبذي المسبب لارتفاع كالسيوم الدم.`
    },
    {
        name: "عد كريات الدم الحمراء (RBCS COUNT) [209080]",
        test: (t) => /rbcs?\s*count|red\s*blood\s*cells?\s*count|209080/i.test(t),
        getNotes: () => `دم كامل EDTA لا يحتاج الى صيام؛ لتقييم درجات فقر الدم وكثرة الحمر وحساب مؤشرات الكريات الحمراء الحجمية.`
    },
    {
        name: "المواد المختزلة في البول (REDUCING SUBSTANCES IN URINE) [221021]",
        test: (t) => /reducing\s*substances?\s*in\s*urine|221021/i.test(t),
        getNotes: () => `عينة بول صباحية ولا يمر عليها ساعتين؛ للكشف عن السكريات المختزلة غير الجلوكوز لدى الرضع لتشخيص الجالاكتوزيميا.`
    },
    {
        name: "السكريات المختزلة في البراز (REDUCING SUGAR IN STOOL) [4235757]",
        test: (t) => /reducing\s*sugar\s*in\s*stool|4235757/i.test(t),
        getNotes: () => `براز سائل ولا يمر عليه ساعتين في كب معقم؛ لتشخيص سوء امتصاص اللاكتوز والإسهال التخثري الحمضي عند الأطفال.`
    },
    {
        name: "إنزيم الرينين في البلازما (RENIN) [210036]",
        test: (t) => /\brenin\b|plasma\s*renin|\bpra\b|direct\s*renin|210036/i.test(t),
        getNotes: () => `بلازما EDTA، سحب صباحاً (8 - 10) بعد استلقاء 20-30 دقيقة مع إيقاف مدرات البول والضغط ومشروب العرقسوس لـ 2-3 أسابيع حسب تعليمات الطبيب.`
    },
    {
        name: "عد الخلايا الشبكية في الدم (RETICULOCYTIC COUNT) [209081]",
        test: (t) => /reticulocyt(ic|e)\s*count|\bretic\s*count\b|209081/i.test(t),
        getNotes: () => `دم كامل EDTA لا يحتاج الى صيام؛ لتقييم كفاءة نخاع العظم والتفريق بين أنيميا تكسير الدم ونقص الإنتاج النخاعي.`
    },
    {
        name: "تحديد فصيلة عامل ريزوس / مضاد د (RH TYPE [ ANTI D ]) [209082]",
        test: (t) => /rh\s*type|anti[-_ ]?d\b|209082/i.test(t),
        getNotes: () => `دم كامل EDTA لا يحتاج الى صيام؛ لتحديد عامل ريزوس قبل نقل الدم ومتابعة الحوامل لتحديد الحاجة لإبرة Anti-D.`
    },
    {
        name: "الصوديوم في البول (SODIUM ,URINE) [221023]",
        test: (t) => /sodium\s*,?\s*urine|urine\s*sodium|221023/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة أو عينة عشوائية؛ للتفريق بين القصور الكلوي الحاد السابق للكلى والنخر الأنبوبي ولتقييم متلازمة SIADH.`
    },
    {
        name: "السكر في البول (SUGAR IN URINE) [221025]",
        test: (t) => /sugar\s*in\s*urine|urine\s*glucose|221025/i.test(t),
        getNotes: () => `عينة بول عشوائية طازجة لا يمر عليها ساعتين؛ للكشف عن البيلة السكرية وتجاوز عتبة امتصاص الكلى للجلوكوز.`
    },
    {
        name: "العد الكلي لكريات الدم البيضاء (TLC [TOTAL LEUCOCYTES COUNT TEST]) [2090019]",
        test: (t) => /\btlc\b.*(leucocyte|count)|total\s*leucocytes?\s*count|2090019/i.test(t),
        getNotes: () => `دم كامل EDTA لا يحتاج الى صيام؛ لتقييم المناعة العامة والعدوى الحادة والالتهابات وتثبيط نخاع العظم.`
    },
    {
        name: "البروتين الكلي في مصل الدم (TOTAL PROTEIN) [204095]",
        test: (t) => /total\s*protein|\btp\b(?!.*urine)|204095/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام مع فك التورنيكيه سريعاً؛ لتقييم كفاءة الكبد التصنيعية، والوضع التغذوي، واكتشاف المايلوما.`
    },
    {
        name: "تصفية اليوريا الكلوية (UREA CLEARANCE) [204102]",
        test: (t) => /urea\s*clearance|204102/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة دقيق بالتزامن مع عينة دم لليوريا؛ لتقييم معدل الترشيح الكبيبي الكلوي.`
    },
    {
        name: "حمض اليوريك في البول (URIC ACID IN URINE) [221027]",
        test: (t) => /uric\s*acid\s*in\s*urine|uricosuria|221027/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة مضاف إليه NaOH كمانع ترسب؛ لتقييم خطر تكوّن حصوات اليورات وفرط إطراح حمض اليوريك.`
    },
    {
        name: "كوليسترول البروتين الدهني منخفض الكثافة جداً (VLDL- CHOL) [204110]",
        test: (t) => /vldl([-_\s]*chol(esterol)?)?|204110/i.test(t),
        getNotes: () => `سيرم بعد صيام من 12-14 ساعة مسموح بشرب المياه فقط وتناول الأدوية؛ لتقييم مسار نقل الدهون الكبدية ومخاطر القلب.`
    },
    {
        name: "عد كريات الدم البيضاء والعد التفريقي (WBCS COUNT(TOTAL&DIFFERENTIAL)) [209086]",
        test: (t) => /wbcs?\s*count.*differential|total\s*(&|\/|\band\b)?\s*differential\s*wbc|209086/i.test(t),
        getNotes: () => `دم كامل EDTA لا يحتاج الى صيام؛ لتصنيف أنواع الخلايا البيضاء واكتشاف العدوى البكتيرية والفيروسية والحساسية.`
    },
    {
        name: "العد الكلي لكريات الدم البيضاء (WBCS TOTAL COUNT) [209087]",
        test: (t) => /wbcs?\s*total\s*count|total\s*wbc|209087/i.test(t),
        getNotes: () => `دم كامل EDTA لا يحتاج الى صيام؛ لمتابعة الاستجابة الالتهابية ومراقبة كبت نخاع العظم أثناء العلاج الكيماوي.`
    },
    {
        name: "الكورتيزول الحر في اللعاب (SALIVA FREE CORTISOL) [210037]",
        test: (t) => /saliva\s*(free\s*)?cortisol|salivary\s*cortisol|210037/i.test(t),
        getNotes: () => `لعاب مجمع في أنبوب Salivette بين 11 مساءً ومنتصف الليل بعد الامتناع عن الأكل والتدخين؛ لتشخيص متلازمة كوشينغ.`
    },
    {
        name: "مستوى بروتين الكروموجرانين أ في الدم (SERUM CHROMOGRANIN) [204078]",
        test: (t) => /serum\s*chromogranin|chromogranin\s*a|\bcga\b|204078/i.test(t),
        getNotes: () => `لا يحتاج الى صيام مع إيقاف أدوية حموضة المعدة PPIs لأسبوعين؛ الواسم الذهبي لأورام الغدد الصم العصبية (NETs).`
    },
    {
        name: "كورتيزول الصباح في الدم (SERUM CORTISOL [ AM ]) [210038]",
        test: (t) => /serum\s*cortisol.*am|cortisol.*morning|210038/i.test(t),
        getNotes: () => `سيرم صباحي يُسحب بين 8-9 صباحاً بعد راحة تامة ولا يحتاج الى صيام؛ لتقييم قصور الكظر (أديسون) وفرط الإفراز.`
    },
    {
        name: "كورتيزول المساء في الدم (SERUM CORTISOL [ PM ]) [210039]",
        test: (t) => /serum\s*cortisol.*pm|cortisol.*evening|210039/i.test(t),
        getNotes: () => `سيرم يُسحب بين الساعة 8-9 مساءً ولا يحتاج الى صيام؛ لتقييم اختلال الإيقاع اليومي لمتلازمة كوشينغ.`
    },
    {
        name: "السعة الكلية لربط الحديد (TIBC [TOTAL IRON BINDING CAPACITY]) [204092]",
        test: (t) => /tibc|total\s*iron\s*binding|204092/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ لحساب نسبة تشبع الترانسفيرين، يرتفع في أنيميا نقص الحديد وينخفض في الترسيب الصبغي.`
    },
    {
        name: "بروتين الترانسفيرين / الحامل للحديد (TRANSFERRIN) [204096]",
        test: (t) => /\btransferrin\b|serum\s*transferrin|204096/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام بدون انحلال دم؛ الناقل الرئيسي للحديد في البلازما، يرتفع بنقص الحديد وينخفض بأمراض الكبد.`
    },
    {
        name: "نسبة تشبع الترانسفيرين بالحديد (TRANSFERRIN SATURATION) [204097]",
        test: (t) => /transferrin\s*saturation|tsat\b|204097/i.test(t),
        getNotes: () => `حساب مباشر (سيرم لا يحتاج الى صيام)؛ الفحص الأدق لتشخيص داء ترسب الأصبغة الدموية وفرط حمل الحديد.`
    },
    {
        name: "مستقبلات الترانسفيرين الذائبة (SOLUBLE TRANSFERRIN RECEPTOR) [210041]",
        test: (t) => /soluble\s*transferrin\s*receptor|\bstfr\b|210041/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ لا يتأثر بالالتهابات، ويُعد الفحص الذهبي للتمييز بين أنيميا نقص الحديد وأنيميا الأمراض المزمنة.`
    },
    {
        name: "هرمون اللبتين في المصل (SERUM LEPTIN) [2040006]",
        test: (t) => /serum\s*leptin|leptin\s*level|2040006/i.test(t),
        getNotes: () => `سيرم صباحي لا يحتاج الى صيام؛ لتقييم اضطرابات الشبع والتمثيل الغذائي ومقاومة اللبتين والسمنة المفرطة.`
    },
    {
        name: "الميتانفرين في مصل الدم (SERUM METANEPHRINE) [3035751]",
        test: (t) => /serum\s*metanephrine(s)?|plasma\s*free\s*metanephrines?|3035751/i.test(t),
        getNotes: () => `بلازما EDTA، الامتناع عن الفانيليا، الموز، المكسرات، الشاي، الكافيين، والشوكولاتة لـ 3-4 أيام وتجنب المنبهات وأدوية الضغط.`
    },
    {
        name: "حمض البيروفيك في مصل الدم (SERUM PYRUVATE) [204084]",
        test: (t) => /serum\s*pyruvate|pyruvic\s*acid|204084/i.test(t),
        getNotes: () => `دم EDTA مسحوب بدون تورنيكيه، يُطلب مع اللاكتات لتشخيص أمراض الميتوكوندريا الأيضية.`
    },
    {
        name: "الجلوبيولين الرابط للهرمونات الجنسية (SHBG) [210040]",
        test: (t) => /sex\s*hormone\s*binding|\bshbg\b|210040/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ يُطلب مع التستوستيرون لحساب مؤشر الأندروجين الحر (FAI) في متلازمة تكيس المبايض والشعرانية.`
    },
    {
        name: "ثلاثي يود الثيرونين الكلي (T3 TOTAL) [210043]",
        test: (t) => /t3\s*total|total\s*t3|triiodothyronine\s*total|210043/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ لتقييم فرط نشاط الغدة الدرقية وتشخيص التسمم الدرقي المعزول بـ T3.`
    },
    {
        name: "اختبار قبط هرمون الغدة الدرقية T3 (T3- UPTAKE) [210042]",
        test: (t) => /t3[-_ ]?\s*uptake|thyroid\s*uptake|210042/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ تقييم غير مباشر لسعة مواقع ربط الجلوبيولين TBG، ويُطلب لحساب مؤشر الثيروكسين الحر.`
    },
    {
        name: "الثيروكسين الكلي (T4 TOTAL) [210044]",
        test: (t) => /t4\s*total|total\s*t4|thyroxine\s*total|210044/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ لتقييم وظيفة الغدة الدرقية وتشخيص القصور والفرط الدرقي.`
    },
    {
        name: "هرمون التستوستيرون الكلي (TESTOSTERONE) [210045]",
        test: (t) => /\btestosterone\b|total\s*testosterone|210045/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام (يفضل صباحاً 7-10 ص)؛ لتقييم قصور الغدد التناسلية والعقم عند الرجال وتكيس المبايض.`
    },
    {
        name: "الجلوبيولين الرابط لهرمون الدرقية (THYRIOD BINDING GLOBULIN[TBG]) [210046]",
        test: (t) => /thyri?od\s*binding\s*globulin|\btbg\b|210046/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ للتمييز بين الارتفاع الحقيقي أو الكاذب في هرمونات الدرقية الناتج عن تغير تركيز البروتين الناقل.`
    },
    {
        name: "الثيروجلوبولين / بروتين الغدة الدرقية (THYROGLOBULIN) [220013]",
        test: (t) => /thyroglobulin|\btg\b(?!.*antibodies)|220013/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام مع فحص الأجسام المضادة Anti-Tg؛ لمتابعة ارتجاع سرطان الغدة الدرقية بعد الاستئصال.`
    },
    {
        name: "بروتين تاو الكلي (Total tau protein) [3435758]",
        test: (t) => /total\s*tau(\s*protein)?|\bt[-_ ]?tau\b|3435758/i.test(t),
        getNotes: () => `سائل نخاع شوكي مجمع في بولي بروبيلين مجمد؛ لتشخيص التلف العصبي لمرض الزهايمر.`
    },
    {
        name: "إنزيم التروپونين عالي الحساسية (TROPONINE HIGH SENSITIVE) [204100]",
        test: (t) => /troponine?\s*high\s*sensitive|hs[-_ ]?troponin|204100/i.test(t),
        getNotes: () => `بلازما هيبارين أو سيرم طارئ مكرر بعد 1-3 ساعات ولا يحتاج الى صيام؛ الواسم المعياري لتشخيص جلطات القلب الحادة (AMI).`
    },
    {
        name: "إنزيم التروپونين آي النوعي للقلب (TROPONINE I) [204101]",
        test: (t) => /troponine?\s*i\b|\bctni\b|204101/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام طارئ؛ لتشخيص احتشاء عضلة القلب الحاد ومتلازمة الشريان التاجي الحادة.`
    },
    {
        name: "الميتانفرين في البول (URINARY METANEPHRINE) [210049]",
        test: (t) => /urinary\s*metanephrine(s)?|210049/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة بحمض الهيدروكلوريك مبرداً؛ تجنب الموز، الشاي، الكافيين، والشوكولاتة لـ 3-4 أيام قبل التجميع.`
    },
    {
        name: "مركبات 17-كيتوستيرويد في بول 24 ساعة (URINARY 17 KETOSTEROIDS [24 HRS]) [210048]",
        test: (t) => /urinary\s*17\s*ketosteroids?|17[-_ ]?ks\b|210048/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة بحمض الهيدروكلوريك مبرداً؛ لتقييم إفراز الأندروجينات الكظرية وتشخيص أورام الكظر ومتلازمة CAH.`
    },
    {
        name: "حمض الفانيليل مانديليك في بول 24 ساعة (VANILMANDELIC ACID (VMA)) [210050]",
        test: (t) => /vanilmandelic\s*acid|\bvma\b|210050/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة بحمض الهيدروكلوريك؛ الامتناع عن الفانيليا، الموز، المكسرات، الشاي، الكافيين والشوكولاتة لـ 3-4 أيام قبل التجميع.`
    },
    {
        name: "فيتامين أ في مصل الدم (VITAMIN A) [204105]",
        test: (t) => /vitamin\s*a\b|retinol|204105/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام محمي تماماً من الضوء بالقصدير ومبرد؛ لتقييم سوء الامتصاص والعمى الليلي وجفاف الملتحمة.`
    },
    {
        name: "فيتامين ب12 / سيانوكوبالامين (VITAMIN B12) [209084]",
        test: (t) => /vitamin\s*b12|cyanocobalamin|\bb12\b|209084/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام محمي من الضوء؛ لتشخيص فقر الدم كبير الكريات وتنميل واعتلال الأعصاب.`
    },
    {
        name: "فيتامين ب2 / ريبوفلافين (VITAMIN B2) [204106]",
        test: (t) => /vitamin\s*b2|riboflavin|204106/i.test(t),
        getNotes: () => `بلازما أو سيرم محمي من الضوء لا يحتاج الى صيام ومجمد فوراً؛ لتقييم سوء التغذية والتهاب زوايا الفم واللسان.`
    },
    {
        name: "فيتامين ب6 / بيريدوكسين (VITAMIN B6) [204107]",
        test: (t) => /vitamin\s*b6|pyridox(al|ine)|204107/i.test(t),
        getNotes: () => `بلازما EDTA مبردة ومحمية تماماً من الضوء ولا تحتاج الى صيام؛ لتقييم اعتلال الأعصاب ومتابعة أدوية السل.`
    },
    {
        name: "فيتامين هـ / ألفا توكوفيرول (VITAMIN E) [204109]",
        test: (t) => /vitamin\s*e\b|tocopherol|204109/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام محمي من الضوء؛ لتقييم اضطرابات امتصاص الدهون والترنح الحركي العصبي.`
    },
    {
        name: "إنهيبين أ في مصل الدم (SERUM INHIBIN A) [3435749]",
        test: (t) => /serum\s*inhibin\s*a|inhibin\s*a|3435749/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام، يتم عمله خلال فترة حمل من 14 أسبوعاً إلى 22 أسبوعاً و6 أيام؛ يتطلب تسجيل تاريخ الميلاد، الوزن، عدد الأجنة وعمر الحمل.`
    },
    {
        name: "إنهيبين ب في مصل الدم (SERUM INHIBIN B) [3435750]",
        test: (t) => /serum\s*inhibin\s*b|inhibin\s*b|3435750/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام (يوم 2-3 من الدورة للمرأة) لتقييم احتياطي المبيض، وللرجال لتقييم إنتاج الحيوانات المنوية.`
    },
    {
        name: "اختبار الفحص الثلاثي للحوامل (TRIPLE MARKER TEST) [204099]",
        test: (t) => /triple\s*marker|triple\s*screen|204099/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام، يتم عمله بين 14 أسبوعاً إلى 22 أسبوعاً و6 أيام؛ يتطلب تاريخ الميلاد والوزن والسونار لتقييم متلازمة داون.`
    },
    {
        name: "تسلسل الإكسوم الكامل / الفحص الجيني الشامل (whole exome sequencing) [Root LABService312]",
        test: (t) => /whole\s*exome\s*sequencing|\bwes\b/i.test(t),
        getNotes: () => `دم كامل EDTA (يُفضل Trio للوالدين والطفل)؛ تسلسل جيني NGS لتشخيص الأمراض الوراثية النادرة والمعقدة.`
    },
    {
        name: "عامل الروماتويد الكمي (RHEUMATOID FACTOR [QUANTITATIVE]) [2120010]",
        test: (t) => /rheumatoid\s*factor.*quantitative|\brf\b.*quantitative|2120010/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ قياس عكري كمي للأجسام المضادة الموجهة ضد IgG لتشخيص ومتابعة شدة التهاب المفاصل الروماتويدي.`
    },
    {
        name: "اختبار روز والر الكمي (Rose Waller quantitative) [212005]",
        test: (t) => /rose\s*waall?er\s*quantitative|212005/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ تلازن مناعي كمي عالي التخصص يعتمد على خلايا دم حمراء حساسة للتحقق من تشخيص الروماتويد.`
    },
    {
        name: "اختبار روز والر النوعي (ROSE WALLER TEST) [2120011]",
        test: (t) => /rose\s*waall?er\s*test|2120011/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ فحص نوعي كاشف لوجود الأجسام المضادة الذاتية لمرض الروماتويد للتمييز بين الآلام المفصلية.`
    },
    {
        name: "أجسام مضادة للحصبة الألمانية نوع IgG (RUBELL IGG) [222047]",
        test: (t) => /rubell?a?\s*igg|222047/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج إلى صيام؛ لتقييم المناعة الوقائية المكتسبة ضد الحصبة الألمانية قبل أو أثناء الحمل لحماية الجنين.`
    },
    {
        name: "قوة ارتباط الأجسام المضادة للحصبة الألمانية (Rubella IgG avidity) [OPD0043]",
        test: (t) => /rubella.*avidity|OPD0043/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج إلى صيام؛ للتفريق الحاسم للحامل عند إيجابية IgM بين العدوى الحديثة الخطيرة والسابقة القديمة.`
    },
    {
        name: "أجسام مضادة للحصبة الألمانية نوع IgM (RUBELLA IGM) [222048]",
        test: (t) => /rubell?a?\s*igm|222048/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج إلى صيام؛ مؤشر مصلي أولي للعدوى الحادة والنشطة بالروبيلا ويُطلب عند ظهور الطفح الجلدي أثناء الحمل.`
    },
    {
        name: "مستضد بكتيريا السالمونيلا (Salmonella AG) [391037]",
        test: (t) => /salmonella\s*ag|salmonella\s*antigen|391037/i.test(t),
        getNotes: () => `براز طازج لا يمر عليه ساعتين؛ كشف مناعي مباشر وسريع عن مستضدات السالمونيلا لتشخيص التسمم الغذائي والنزلات المعوية.`
    },
    {
        name: "أجسام مضادة للسالمونيلا التيفية نوع IgG (Salmonella Typhi IgG) [Root LABService10]",
        test: (t) => /salmonella\s*typhi\s*igg|typhi\s*dot\s*igg/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج إلى صيام؛ لتحديد التعرض السابق للتيفود أو تقييم الحمل المزمن للبكتيريا والاستجابة المناعية.`
    },
    {
        name: "أجسام مضادة للسالمونيلا التيفية نوع IgM (Salmonella Typhi IgM) [Root LABService11]",
        test: (t) => /salmonella\s*typhi\s*igm|typhi\s*dot\s*igm/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج إلى صيام؛ فحص سريع (TyphiDot) لتشخيص العدوى الحادة المبكرة بحمى التيفود خلال الأسبوع الأول من الحمى.`
    },
    {
        name: "مستقبل الإنترلوكين-2 الذائب (SCD25 [SOLUBLE CD25]) [3335762]",
        test: (t) => /scd25|soluble\s*cd25|soluble\s*il[-_ ]?2|3335762/i.test(t),
        getNotes: () => `سيرم مجمد فوراً ولا يحتاج إلى صيام؛ واسم نوعي لتشخيص متلازمة بلعمة خلايا الدم (HLH) والتنشيط التائي العنيف.`
    },
    {
        name: "اختبار شيبو لإنزيم بيروفات كيناز الورمي بالبراز (SCHEBO TEST [ M2PK]) [2040042]",
        test: (t) => /schebo\s*test|m2[-_ ]?pk|2040042/i.test(t),
        getNotes: () => `براز لا يمر عليه ساعتين بدون حمية خاصة؛ فحص إنزيمي غير جراحي للكشف عن أورام وسلائل القولون والتهابات الأمعاء.`
    },
    {
        name: "المسح الشامل لسموم ومخدرات الإدمان في البول (SCREENING FOR DRUGS OF ABUSE) [4535748]",
        test: (t) => /screening\s*for\s*drugs\s*of\s*abuse|doa\s*screen|4535748/i.test(t),
        getNotes: () => `عينة بول عشوائية مراقبة؛ لوحة مسحية للكشف عن الحشيش والأفيونات والترامادول والمهدئات والأمفيتامينات.`
    },
    {
        name: "تحليل السائل المنوي الشامل (SEMEN ANALYSIS) [217004]",
        test: (t) => /semen\s*analysis|sfa\b|217004/i.test(t),
        getNotes: () => `امتناع تام 3-5 أيام عن القذف، الجمع بالاستمناء في عبوة معقمة، وتصل للمختبر دافئة خلال 30-60 دقيقة؛ لتقييم الحركة والعدد والتشوهات.`
    },
    {
        name: "مستوى هرمون السيروتونين في الدم (SEROTONIN LEVEL) [220012]",
        test: (t) => /serotonin\s*level|5[-_ ]?ht\b|220012/i.test(t),
        getNotes: () => `بلازما EDTA أو سيرم مثلج ومحمي من الضوء، مع الامتناع عن الموز والشوكولاتة والمكسرات لـ 72 ساعة؛ لتشخيص الأورام السرطاوية.`
    },
    {
        name: "عنصر الكادميوم في مصل الدم (SERUM CADMIUM) [206029]",
        test: (t) => /serum\s*cadmium|cadmium.*serum|206029/i.test(t),
        getNotes: () => `عينة دم بأنبوب خالٍ من المعادن ولا تحتاج لصيام؛ لتقييم حالات التسمم المهني لحماية وظائف الكلى والرئة.`
    },
    {
        name: "الجلوبيولين المناعي د في المصل (SERUM IG D) [211020]",
        test: (t) => /serum\s*ig\s*d|immunoglobulin\s*d|\bigd\b|211020/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج لصيام؛ لتقييم مايلوما IgD النادرة وتشخيص متلازمة فرط الغلوبولين D ونوبات الحمى الدورية للأطفال (HIDS).`
    },
    {
        name: "الجلوبيولين المناعي ج في المصل (SERUM IG G) [211021]",
        test: (t) => /serum\s*ig\s*g|immunoglobulin\s*g|\bigg\b(?!.*avidity)|211021/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج لصيام؛ لقياس الأجسام المضادة الرئيسية وتقييم المناعة طويلة الأمد وأمراض نقص المناعة وخلايا البلازما.`
    },
    {
        name: "عنصر الرصاص في مصل الدم (SERUM LEAD) [206030]",
        test: (t) => /serum\s*lead|lead.*serum|\bpb\b.*serum|206030/i.test(t),
        getNotes: () => `عينة دم بأنبوب مخصص خالٍ من المعادن ولا تحتاج لصيام؛ للتحري عن التسمم البيئي والمهني بالرصاص الحاد والمزمن.`
    },
    {
        name: "عنصر الزئبق في مصل الدم (SERUM MERCURY) [2040027]",
        test: (t) => /serum\s*mercury|\bhg\b.*serum|2040027/i.test(t),
        getNotes: () => `أنبوب خالٍ من المعادن مع تجنب الأسماك لـ 72 ساعة ولا يحتاج لصيام؛ لتشخيص التسمم والأعراض العصبية والكلوية بالزئبق.`
    },
    {
        name: "عنصر السيلينيوم في مصل الدم (SERUM SELENIUM) [206031]",
        test: (t) => /serum\s*selenium|\bse\b.*serum|206031/i.test(t),
        getNotes: () => `سيرم مفصول بأنبوب خالٍ من المعادن ولا يحتاج لصيام؛ لتقييم نقص مضادات الأكسدة واعتلال عضلة القلب أثناء التغذية الوريدية أو التسمم.`
    },
    {
        name: "الأجسام المضادة النوعية للأطعمة IgE (SERUM SPECIFIC IGE FOR FOOD) [211023]",
        test: (t) => /specific\s*ige.*food|food\s*allergy.*ige|211023/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج لصيام؛ كشف كمي نوعي عن حساسية IgE للأغذية الشائعة (حليب، بيض، فول سوداني، قمح) لتشخيص التحسس الفوري.`
    },
    {
        name: "الأجسام المضادة النوعية للمستنشقات IgE (SERUM SPECIFIC IGE FOR INHALANTS) [211024]",
        test: (t) => /specific\s*ige.*inhalants?|211024/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج لصيام؛ للكشف عن حساسية المستنشقات التنفسية (غبار، طلع، فطريات، وبر) لحساسية الصدر والأنف.`
    },
    {
        name: "الجلوبيولين المناعي الكلي هـ (SERUM TOTAL IG E) [211025]",
        test: (t) => /serum\s*total\s*ig\s*e|total\s*ige|211025/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج لصيام؛ لتقييم الاستعداد التحسسي العام، الأكزيما، الربو، والتحري عن العدوى الطفيلية بالديدان.`
    },
    {
        name: "إنزيم التريبتاز في مصل الدم (SERUM TRYPTASE) [204085]",
        test: (t) => /serum\s*tryptase|tryptase\s*level|204085/i.test(t),
        getNotes: () => `سيرم يُسحب خلال نصف ساعة إلى 3 ساعات من نوبة الحساسية الحادة ولا يحتاج لصيام؛ لتأكيد الصدمة التحسسية أو كثرة الخلايا البدينة.`
    },
    {
        name: "عنصر الزنك في مصل الدم (SERUM ZINC) [204087]",
        test: (t) => /serum\s*zinc|\bzn\b.*serum|204087/i.test(t),
        getNotes: () => `سيرم صباحي مفصول سريعاً بأنبوب خالٍ من المعادن ولا يحتاج لصيام؛ لتقييم تساقط الشعر، نقص المناعة، والتهابات الجلد المعوية.`
    },
    {
        name: "لوحة الأمراض المنقولة جنسياً بالبي سي آر (STD panel [PCR]) [Root LABService268]",
        test: (t) => /sexually\s*transmitted\s*diseases?.*pcr|\bstd\b.*panel/i.test(t),
        getNotes: () => `مسحة تناسلية أو أول عينة بول صباحية؛ تقنية Multiplex PCR للكشف المتزامن عن الكلاميديا، السيلان، الميكوبلازما، والتريكوموناس.`
    },
    {
        name: "اختبار التمنجل / فحص الخلايا المنجلية (SICKLING TEST) [209083]",
        test: (t) => /sickling\s*test|sickle\s*cell\s*prep|209083/i.test(t),
        getNotes: () => `دم كامل EDTA لا يحتاج لصيام؛ يخلط مجهرياً مع ميتابيسلفيت الصوديوم كفحص مسحي أولي سريع لتمنجل كريات HbS بأنيميا الخلايا المنجلية.`
    },
    {
        name: "الأجسام المضادة للمستضد الكبدي الذائب (SLA AB) [204090]",
        test: (t) => /sla\s*ab|soluble\s*liver\s*ag|anti[-_ ]?sla|204090/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج لصيام؛ واسم عالي التخصص لتشخيص التهاب الكبد المناعي الذاتي (AIH-1) وتوقع شدة المرض وميله للانتكاس.`
    },
    {
        name: "فحص العينة النسيجية الصغيرة (SMALL BIOPSY) [2160010]",
        test: (t) => /small\s*biopsy|endoscopic\s*biopsy|2160010/i.test(t),
        getNotes: () => `خزعة نسيجية تحفظ فوراً في محلول فورمالين منظم 10% بحجم كافٍ؛ للفحص الهستوباثولوجي المجهري للأورام.`
    },
    {
        name: "الأجسام المضادة للعضلات الملساء بالفلورسنت (SMA BY IF) [2010013]",
        test: (t) => /smooth\s*muscle\s*anti|\basma\b|\bsma\b.*if|2010013/i.test(t),
        getNotes: () => `سيرم دم لا يحتاج لصيام؛ فحص بالفلورسنت المناعي غير المباشر بعيار مخفف لتشخيص التهاب الكبد المناعي الذاتي من النمط الأول.`
    },
    {
        name: "سفينغوميلين لمرض نيمان بيك (SPHINGOMYLIN) [2835754]",
        test: (t) => /sphingomylin|niemann\s*beck?man|2835754/i.test(t),
        getNotes: () => `دم كامل EDTA أو كريات بيضاء معزولة لا يحتاج لصيام؛ لقياس إنزيم السفينغوميليناز لتشخيص نيمان-بيك وأمراض التخزين الليزوزومي.`
    },
    {
        name: "مستوى عقار ستيلارا في الدم (Stelara through level) [Root LABService247]",
        test: (t) => /stelara\s*thr(ough|ough?)\s*level|ustekinumab/i.test(t),
        getNotes: () => `سيرم قبل الحقنة التالية ولا يحتاج لصيام؛ للتحقق من وصول تركيز الأوستكينوماب للمستوى العلاجي الفعال في الصدفية والتهاب الأمعاء.`
    },
    {
        name: "الأجسام المضادة لعقار ستيلارا (Stelara antibodies) [Root LABService248]",
        test: (t) => /stelara\s*antibodies|anti[-_ ]?ustekinumab/i.test(t),
        getNotes: () => `سيرم قبل الجرعة مباشرة ولا يحتاج لصيام؛ لتفسير فقدان الفاعلية الدوائية ضد عقار أوستكينوماب لمرضى داء كرون والصدفية.`
    },
    {
        name: "تحليل الحصوات الكلوية والبولية (STONE ANALYSIS) [206033]",
        test: (t) => /stone\s*analysis|kidney\s*stone\s*analysis|206033/i.test(t),
        getNotes: () => `إرسال الحصوة جافة تماماً بدون أي سوائل كالفورمالين؛ لتحليل تركيبها الكيميائي بالأشعة FTIR لمنع تكرار تكوّنها.`
    },
    {
        name: "التحليل الروتيني للبراز (STOOL ANALYSIS) [218005]",
        test: (t) => /stool\s*analysis(?!.*gap)|routine\s*stool|218005/i.test(t),
        getNotes: () => `عينة براز حديثة تصل للمختبر خلال ساعتين؛ للكشف عن الطفيليات والديدان وبويضاتها، الصديد، والدم غير المهضوم.`
    },
    {
        name: "الفجوة الأسمولية للبراز (STOOL OSMOLAL GAP) [218006]",
        test: (t) => /stool\s*osmolal\s*gap|fecal\s*osmotic\s*gap|218006/i.test(t),
        getNotes: () => `براز سائل لا يمر عليه ساعتين؛ للتفريق الحاسم بين الإسهال الإفرازي والإسهال الأسمولي لسوء الامتصاص.`
    },
    {
        name: "درجة حموضة البراز (STOOL PH) [4235755]",
        test: (t) => /stool\s*ph|fecal\s*ph|4235755/i.test(t),
        getNotes: () => `براز سائل أو رخو طازج؛ لتقييم سوء امتصاص السكريات وعدم تحمل اللاكتوز المؤدي لحموضة شديدة (أقل من 5.5).`
    },
    {
        name: "فحص طفيل الكريبتوسبوريديوم في البراز (STOOL TEST FOR CRYPTOSPONIDIUM) [4235756]",
        test: (t) => /cryptospo(ri|ni)dium|4235756/i.test(t),
        getNotes: () => `عينة براز طازجة بصبغة مخصصة مقاومة للحمض (Modified ZN)؛ لتشخيص إسهال الكريبتوسبوريديوم لمرضى ضعف المناعة.`
    },
    {
        name: "التحليل الخلوي والكيميائي للسائل المفصلي (SYNOVIAL FLUID ANALYSIS) [202016]",
        test: (t) => /synovial\s*fluid\s*analysis|joint\s*fluid\s*analysis|202016/i.test(t),
        getNotes: () => `بزل سائل مفصلي معقم؛ لعد الخلايا وفحص البلورات بالمجهر المستقطب للتمييز بين النقرس، النقرس الكاذب، والالتهاب الإنتاني.`
    },
    {
        name: "مزرعة وحساسية السائل المفصلي (SYNOVIAL FLUID C& S) [2020001]",
        test: (t) => /synovial\s*fluid.*(c\s*(&|\/|\band\b)?\s*s|culture)|2020001/i.test(t),
        getNotes: () => `سائل مفصلي معقم يُحقن في زجاجات مزارع؛ لتشخيص التهاب المفاصل الجرثومي الإنتاني وتحديد المضاد الحيوي الفعال.`
    },
    {
        name: "مستوى عقار التاكروليموس في الدم (TACROLIMUS) [207010]",
        test: (t) => /tacrolimus|fk[-_ ]?506|prograf|207010/i.test(t),
        getNotes: () => `دم كامل EDTA قبل موعد الجرعة التالية مباشرة ولا يحتاج الى صيام؛ لضبط التثبيط المناعي لمنع رفض الأعضاء المزروعة.`
    },
    {
        name: "مزرعة بكتيريا السل بنظام باكتيك (TB CULTURE [BACTEC]) [2040033]",
        test: (t) => /tb\s*culture.*bactec|mycobacteri(a|um)\s*culture|2040033/i.test(t),
        getNotes: () => `بصاق صباحي 3 أيام أو سوائل جسمية؛ زرع آلي بوسط BACTEC السائل السريع للكشف عن عصيات الدرن واختبار الحساسية الدوائية.`
    },
    {
        name: "مستوى عقار التيجريتول / كاربامازيبين بالدم (TEGRETOL) [207011]",
        test: (t) => /tegretol|carbamazepine|207011/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام قبل الجرعة مباشرة؛ لضبط جرعة التحكم في نوبات الصرع وآلام العصب الخامس وتجنب هبوط الصوديوم.`
    },
    {
        name: "مستوى عقار الثيوفيلين في الدم (THEOPHYLLINE LEVEL) [204093]",
        test: (t) => /theophylline|aminophylline|204093/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام قبل الجرعة التالية مباشرة؛ لمراقبة توسيع الشعب وتفادي السمية المسببة لاضطراب النبض والتشنجات.`
    },
    {
        name: "الجلوبيولين الرابط لهرمون الدرقية (TBG) [210046]",
        test: (t) => /thyri?od\s*binding\s*globulin|\btbg\b|210046/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ للتمييز بين الارتفاع الحقيقي أو الكاذب في هرمونات الدرقية الناتج عن تغير تركيز البروتين الناقل.`
    },
    {
        name: "الثيروجلوبولين / بروتين الغدة الدرقية (THYROGLOBULIN) [220013]",
        test: (t) => /thyroglobulin|\btg\b(?!.*antibodies)|220013/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام مع فحص الأجسام المضادة Anti-Tg لمنع التداخل؛ لمتابعة ارتجاع سرطان الغدة الدرقية بعد الاستئصال.`
    },
    {
        name: "التوافق التبادلي للأنسجة (TISSUE CROSS MATCHING) [219007]",
        test: (t) => /tissue\s*cross\s*matching|hla\s*cross\s*match|219007/i.test(t),
        getNotes: () => `خلايا المتبرع الليمفاوية مع سيرم المتلقي؛ الاختبار الإلزامي الحاسم لزراعة الكلى لمنع الرفض الحاد الفوري للعضو.`
    },
    {
        name: "أجسام مضادة لترانس جلوتامينيز النسيجي نوع IgA (TTG IGA) [211030]",
        test: (t) => /tissue\s*transglutaminase\s*iga|ttg\s*iga|211030/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام مع استمرار المريض على طعام يحتوي جلوتين؛ المعيار الذهبي الأول لتشخيص حساسية القمح (مرض السيلياك).`
    },
    {
        name: "أجسام مضادة لترانس جلوتامينيز النسيجي نوع IgG (TTG IGG) [211031]",
        test: (t) => /tissue\s*transglutaminase\s*igg|ttg\s*igg|211031/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ بديل تشخيصي لمرض السيلياك للمرضى الذين يعانون من نقص وراثي خلقي في الأجسام المضادة الكلية IgA.`
    },
    {
        name: "لوحة تورش للأجسام المضادة نوع IgG (TORCH IGG) [222049]",
        test: (t) => /torch\s*igg|anti[-_ ]?torch\s*igg|222049/i.test(t),
        getNotes: () => `سيرم لا يحتاج صيام؛ مسح مصلي شامل للأجسام المضادة السابقة للتوكسوبلازما والروبيلا وفيروس CMV والهربس لتقييم مناعة الحامل.`
    },
    {
        name: "لوحة تورش للأجسام المضادة نوع IgM (TORCH IGM) [222050]",
        test: (t) => /torch\s*igm|anti[-_ ]?torch\s*igm|222050/i.test(t),
        getNotes: () => `سيرم لا يحتاج صيام؛ لتشخيص العدوى الحادة أو الحديثة بميكروبات التورش أثناء الحمل لتقييم خطورة الإجهاض والتشوهات الخلقية.`
    },
    {
        name: "المسح الشامل للسموم (TOXICOLOGY SCREENING) [4535758]",
        test: (t) => /toxicology\s*screen|tox\s*screen|4535758/i.test(t),
        getNotes: () => `بول أو دم إسعافي موثق؛ لفرز حالات الجرعات الزائدة والتسمم الحاد بالأدوية والمواد المجهولة لتوجيه العلاج الترياقي الفوري.`
    },
    {
        name: "الأجسام المضادة لديدان التوكسوكارا الكلبية (Toxocara Canis Ab) [OPD0042]",
        test: (t) => /toxocara|anti[-_ ]?toxocara|OPD0042/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ لتشخيص متلازمة هجرة اليرقات الحشوية والعينية الناتجة عن يرقات الديدان الكلبية.`
    },
    {
        name: "أجسام مضادة للمقوسات / داء القطط نوع IgG (TOXOPLASMA IGG) [215009]",
        test: (t) => /toxoplasma\s*igg|anti[-_ ]?toxo.*igg|215009/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ لتقييم المناعة السابقة وطويلة الأمد ضد داء المقوسات والتأكد من الحماية الوقائية قبل وأثناء الحمل.`
    },
    {
        name: "أجسام مضادة للمقوسات / داء القطط نوع IgM (TOXOPLASMA IGM) [215010]",
        test: (t) => /toxoplasma\s*igm|anti[-_ ]?toxo.*igm|215010/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ الفحص المصلي الأولي لتشخيص العدوى الحادة الحالية بداء القطط للحامل وتقييم خطورة إصابة الجنين.`
    },
    {
        name: "فحص طفيل المقوسات بالبي سي آر (TOXOPLASMA PCR) [206034]",
        test: (t) => /toxoplasma\s*pcr|toxo.*dna.*pcr|206034/i.test(t),
        getNotes: () => `سائل أمنيوسي أو دم EDTA؛ التأكيد الجزيئي القطعي المباشر لانتقال عدوى التوكسوبلازما للجنين أو الجهاز العصبي.`
    },
    {
        name: "اختبار قوة ارتباط الأجسام المضادة للتوكسوبلازما (TOXOPLASMOSIS AVIDITY) [215011]",
        test: (t) => /toxoplasmo.*avidity|toxo\s*igg\s*avidity|215011/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ يُطلب عند إيجابية IgM للتمييز الحاسم بين العدوى الحديثة في أشهر الحمل الأولى والسابقة القديمة.`
    },
    {
        name: "اختبار التراص غير المباشر للزهري (TPHA FOR SYPHILIS) [206035]",
        test: (t) => /tpha|treponema\s*pallidum\s*hemagglutination|206035/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ اختبار لولبي نوعي تأكيدي مخصص لتشخيص الزهري والتحقق من صحة فحوصات المسح كـ VDRL.`
    },
    {
        name: "مستوى عقار الترامادول في مصل الدم (TRAMADOL IN SERUM) [207012]",
        test: (t) => /tramadol\s*in\s*serum|serum\s*tramadol|207012/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ لقياس التركيز الدقيق لمسكن الترامادول في حالات التسمم والجرعات الزائدة وضبط آلام الأمراض المزمنة.`
    },
    {
        name: "تحليل مخدر الترامادول في البول (TRAMADOL IN URINE) [221026]",
        test: (t) => /tramadol\s*in\s*urine|urine\s*tramadol|221026/i.test(t),
        getNotes: () => `بول عشوائي نظيف لا يمر عليه ساعتين؛ كشف سمومي نوعي سريع عن الترامادول وأيضاته لفحوصات التوظيف واللجان الطبية.`
    },
    {
        name: "فحص طفيل المشعرة المهبلية (Trichomonas Vaginalis) [Root LABService260]",
        test: (t) => /trichomonas(\s*vaginalis)?/i.test(t),
        getNotes: () => `مسحة إفرازات مهبلية طازجة أو بول صباحي؛ لتشخيص داء المشعرات التناسلي المنقول جنسياً والمسبب للالتهابات.`
    },
    {
        name: "صبغة الترايكروم النسيجية / الطفيلية (Trichrome stain) [Root LABService316]",
        test: (t) => /trichrome\s*stain|masson\s*trichrome/i.test(t),
        getNotes: () => `خزعة نسيجية لتقييم تليف الكولاجين أو براز مثبت بـ PVA للفحص المجهري الدقيق لأكياس وأطوار الطفيليات.`
    },
    {
        name: "مضادات الاكتئاب ثلاثية الحلقات في البول (Tricyclic anti-depressant in urine) [4535759]",
        test: (t) => /tricyclic\s*anti[-_ ]?depressant.*urine|\btca\b.*urine|4535759/i.test(t),
        getNotes: () => `بول عشوائي طازج لا يمر عليه ساعتين؛ فحص سمومي إسعافي سريع عند الاشتباه بالجرعات الزائدة لتفادي سمية القلب.`
    },
    {
        name: "مستوى عقار تريليبتال / أوكسكاربازيبين في الدم (TRILEPTAL DRUG LEVEL) [2060016]",
        test: (t) => /trileptal|oxcarba(te|ze)pine|2060016/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام قبل الجرعة التالية؛ لقياس المستقلب النشط لضبط علاج الصرع الجزئي وتجنب نقص صوديوم الدم.`
    },
    {
        name: "الأجسام المضادة لمستقبلات التي إس إتش (TSH RECEPTOR ANTIBODIES) [201045]",
        test: (t) => /tsh\s*receptor\s*anti|\btrab\b|\btsi\b|201045/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ الواسم التشخيصي لداء جريفز لفرط نشاط الغدة الدرقية، ومراقبة مخاطر انتقال الأجسام للجنين.`
    },
    {
        name: "صبغة عامل النسخ الدرقي 1 النسيجية (TTF1) [216031]",
        test: (t) => /\bttf[-_ ]?1\b|thyroid\s*transcription\s*factor|216031/i.test(t),
        getNotes: () => `خزعة نسيجية شمعية (IHC)؛ لتحديد المنشأ النسيجي كواسم إيجابي لسرطان الرئة الغدي وأورام الغدة الدرقية.`
    },
    {
        name: "اختبار التيوبركولين الجلدي للدرن (TUBERCULIN TEST) [206036]",
        test: (t) => /tuberculin\s*test|\bmantoux\b|206036/i.test(t),
        getNotes: () => `حقن 0.1 مل PPD داخل الأدمة بالساعد مع قياس قطر التصلب الجلدي بدقة بعد 48-72 ساعة؛ لتشخيص عدوى السل الكامنة.`
    },
    {
        name: "اختبار تنفس اليوريا لجرثومة المعدة (UREA BREATH TEST [UBT]) [391036]",
        test: (t) => /urea\s*breath\s*test|\bubt\b|391036/i.test(t),
        getNotes: () => `صيام 4-6 ساعات وإيقاف المضادات الحيوية 4 أسابيع وأدوية المعدة أسبوعين؛ المعيار الذهبي الأدق لتأكيد وتتبع علاج جرثومة المعدة.`
    },
    {
        name: "نسبة حمض اليوريك إلى الكرياتينين في البول (Uric acid/ Creatinine ratio) [Root LABService48]",
        test: (t) => /uric\s*acid[\s/]*creatinine\s*ratio/i.test(t),
        getNotes: () => `عينة بول عشوائية صائمة؛ للتفريق بين فرط إطراح اليورات الكلوي وانحلال الورم المسبب للفشل الكلوي الحاد.`
    },
    {
        name: "نيتروجين يوريا البول (URINARY UREA NITROGEN (UUN)) [221028]",
        test: (t) => /urinary\s*urea\s*nitrogen|\buun\b|221028/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة مبرد؛ لتقييم توازن النيتروجين وتحديد معدل الهدم البروتيني لمرضى الرعاية والتغذية الوريدية.`
    },
    {
        name: "إنزيم الأميلاز في البول (URINE AMYLASE) [204103]",
        test: (t) => /urine\s*amylase|amylasuria|204103/i.test(t),
        getNotes: () => `بول عشوائي؛ يظل مرتفعاً بالبول لعدة أيام بعد عودة مستويات الدم الطبيعية بالتهاب البنكرياس الحاد.`
    },
    {
        name: "المسح الاستقلابي في البول لحديثي الولادة (URINE FOR METABOLIC SCREENING) [221029]",
        test: (t) => /urine.*metabolic\s*screening|inborn\s*errors.*urine|221029/i.test(t),
        getNotes: () => `بول صباحي طازج مجمد بدون مواد حافظة؛ كشف مسحي عن أمراض التمثيل الغذائي والأحماض العضوية الوراثية للرضع.`
    },
    {
        name: "الهوموسيستين في البول (URINE HOMOCYTEINE) [204104]",
        test: (t) => /urine\s*homocysteine|homocystinuria|204104/i.test(t),
        getNotes: () => `بول عشوائي مثلج صائم؛ لتشخيص بيلة الهوموسيستين الوراثية وأسباب التجلطات المبكرة واعتلالات النمو والعظام.`
    },
    {
        name: "الضغط الأسمولي للبول (URINE OSMOLALITY) [221030]",
        test: (t) => /urine\s*osmolality|221030/i.test(t),
        getNotes: () => `بول صباحي طازج؛ المقياس الأدق لقدرة الكلى على تركيز البول وللتفريق بين السكري الكاذب ومتلازمة SIADH.`
    },
    {
        name: "البوتاسيوم في بول 24 ساعة (URINE POTASSIUM /24 HOURS) [Root LABService246]",
        test: (t) => /urine\s*potassium.*24\s*hours?/i.test(t),
        getNotes: () => `تجميع بول 24 ساعة كاملاً مبرد؛ لتقييم إطراح الكلى للبوتاسيوم وتشخيص متلازمات الفقد الكلوي كمتلازمة بارتر وجيتلمان.`
    },
    {
        name: "مستوى عقار حمض الفالبرويك / ديباكين في الدم (VALPORIC ACID ( DEPAKIN ) ) [207013]",
        test: (t) => /valporic\s*acid|valproic\s*acid|depakin|207013/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام قبل الجرعة مباشرة؛ للمراقبة العلاجية لضبط الصرع والاضطراب الوجداني والوقاية من سمية الكبد.`
    },
    {
        name: "مستوى المضاد الحيوي فانكومايسين في الدم (VANCOMYCIN LEVEL) [207014]",
        test: (t) => /vancomycin|207014/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام مسحوب قبل الجرعة مباشرة (Trough Level)؛ لضمان الفاعلية ضد المكورات وتجنب التسمم الكلوي والسمعي.`
    },
    {
        name: "أجسام مضادة لفيروس الجدري المائي نوع IgG (VARICELLA ZOSTER AB IGG) [222051]",
        test: (t) => /varicella.*zoster.*igg|chicken\s*pox.*igg|\bvzv\b.*igg|222051/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ لتقييم المناعة المكتسبة ضد فيروس الجدري المائي والحزام الناري للحوامل والعاملين بالمجال الطبي.`
    },
    {
        name: "أجسام مضادة لفيروس الجدري المائي نوع IgM (VARICELLA ZOSTER AB IGM) [222052]",
        test: (t) => /varicella.*zoster.*igm|chicken\s*pox.*igm|\bvzv\b.*igm|222052/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام؛ مؤشر للعدوى الحادة بمرض الجدري المائي النشط أو إعادة التنشيط في صورة الحزام الناري.`
    },
    {
        name: "المستوى الدوائي لعقار فيدوليزوماب في الدم (Vedolizumab (Trough)) [Root LABService315]",
        test: (t) => /vedolizumab.*(trough|level)|entyvio/i.test(t),
        getNotes: () => `سيرم لا يحتاج الى صيام قبل الجرعة التالية مباشرة؛ للمراقبة الدوائية لضمان كفاءة علاج القولون التقرحي وكرون.`
    },
    {
        name: "الأجسام المضادة لعقار فيدوليزوماب (Vedolizumab Ab) [Root LABService314]",
        test: (t) => /vedolizumab\s*ab|entyvio\s*antibodies/i.test(t),
        getNotes: () => `سيرم قبل الجرعة مباشرة ولا يحتاج الى صيام؛ للكشف عن الأجسام المضادة المقاومة للدواء عند تراجع الاستجابة بمرضى كرون.`
    },
    {
        name: "مستضد عامل فون فيلبراند (VON WILLBRAND FACTOR) [209085]",
        test: (t) => /von\s*wille?brand\s*factor|\bvwf\b(\s*ag)?|209085/i.test(t),
        getNotes: () => `بلازما سترات نقية مجمدة فوراً؛ كشف كمي عن مستضد البروتين لتشخيص وتصنيف مرض فون فيلبراند النزفي الوراثي.`
    },
    {
        name: "نشاط عامل فون فيلبراند (Von willbrand factor activity) [2040007]",
        test: (t) => /von\s*wille?brand.*activity|\bvwf\b.*activity|2040007/i.test(t),
        getNotes: () => `بلازما سترات مثلجة وسريعة الفصل؛ لتقييم الكفاءة الوظيفية لارتباط العامل بالصفائح الدموية وجدر الأوعية.`
    },
    {
        name: "نشاط عامل فون فيلبراند بالريستوسيتين (VWF RISTOCETIN COFACTOR) [3335761]",
        test: (t) => /ristocetin\s*cofactor|\bvwf\b.*(rico|rcof)|3335761/i.test(t),
        getNotes: () => `بلازما سترات مجمدة فوراً؛ الفحص الحركي المعياري (VWF:RCo) لتقييم تفاعل العامل مع الصفائح لتشخيص النمط الثاني بدقة.`
    },
    {
        name: "فحص العضو المستأصل بالكامل باثولوجياً (WHOLE ORGAN) [216032]",
        test: (t) => /whole\s*organ|radical\s*(resection|specimen)|216032/i.test(t),
        getNotes: () => `عضو مستأصل جراحياً في فورمالين 10% بنسبة (1:10 على الأقل)؛ لفحص عياني ومجهري شامل لعمق الورم وحواف الاستئصال.`
    },
    {
        name: "قراءة شريحة باثولوجي / فحص رأي ثانٍ (قراءه شريحه باثولوجى) [2835762]",
        test: (t) => /قراء[هة]\s*شريح[هة]\s*باثولوج[يى]|pathology\s*slide\s*review|2835762/i.test(t),
        getNotes: () => `إحضار الشرائح المصبوغة مع قوالب البرافين والتقرير؛ للحصول على رأي استشاري ثانٍ وتأكيد التشخيص النسيجي للأورام.`
    }
];

// ============================================================================
// محرك المعالجة المسبقة للصورة (Canvas Preprocessing)
// وظيفتها: قص السواد التلقائي + تعزيز الحبر المكتوب + معالجة التشويش والبكسلة
// ============================================================================

async function preprocessMedicalImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // تحجيم ذكي للصورة لحل مشكلة البكسلة وتخفيف عبء الإرسال
                const MAX_DIM = 2000;
                let w = img.width;
                let h = img.height;

                if (w > h && w > MAX_DIM) {
                    h = Math.round((h * MAX_DIM) / w);
                    w = MAX_DIM;
                } else if (h > MAX_DIM) {
                    w = Math.round((w * MAX_DIM) / h);
                    h = MAX_DIM;
                }

                canvas.width = w;
                canvas.height = h;
                ctx.drawImage(img, 0, 0, w, h);

                const imgData = ctx.getImageData(0, 0, w, h);
                const data = imgData.data;

                // كشف الحواف وعزل الإطارات السوداء الناتجة عن التصوير
                let minX = w, minY = h, maxX = 0, maxY = 0;
                const blackThreshold = 35;

                for (let y = 0; y < h; y += 4) {
                    for (let x = 0; x < w; x += 4) {
                        const idx = (y * w + x) * 4;
                        if (data[idx] > blackThreshold || data[idx + 1] > blackThreshold || data[idx + 2] > blackThreshold) {
                            if (x < minX) minX = x;
                            if (x > maxX) maxX = x;
                            if (y < minY) minY = y;
                            if (y > maxY) maxY = y;
                        }
                    }
                }

                // رفع التباين لإبراز حبر الروشتة وتحديد الخطوط اليدوية الرديئة
                const contrast = 42;
                const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

                for (let i = 0; i < data.length; i += 4) {
                    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
                    const enhanced = Math.min(255, Math.max(0, factor * (gray - 128) + 128));
                    data[i] = enhanced;
                    data[i + 1] = enhanced;
                    data[i + 2] = enhanced;
                }
                ctx.putImageData(imgData, 0, 0);

                const cropWidth = Math.max(maxX - minX, 100);
                const cropHeight = Math.max(maxY - minY, 100);

                const finalCanvas = document.createElement('canvas');
                finalCanvas.width = cropWidth;
                finalCanvas.height = cropHeight;
                const finalCtx = finalCanvas.getContext('2d');

                finalCtx.drawImage(
                    canvas,
                    minX, minY, cropWidth, cropHeight,
                    0, 0, cropWidth, cropHeight
                );

                resolve(finalCanvas.toDataURL('image/jpeg', 0.92));
            };
            img.onerror = reject;
        };
    });
}

// ============================================================================
// محرك الذكاء الاصطناعي الشامل لقراءة الروشتات والمطابقة الهجينة (Hybrid Engine)
// ============================================================================

async function scanPrescriptionWithAI(imageFile, apiKey) {
    const loadingElem = document.querySelector('.loading') || document.querySelector('[class*="loading"]') || document.getElementById('loading');
    if (loadingElem) loadingElem.style.display = 'block';

    try {
        const base64Url = await preprocessMedicalImage(imageFile);
        const rawBase64 = base64Url.split(',')[1];

        // قائمة إرشادية بأشهر أسماء التحاليل المعتمدة لتوجيه النموذج
        const sampleKnownNames = DOTCARE_EXTRA_TESTS.map(t => t.name).slice(0, 80).join(", ");

        const systemPrompt = `
أنت طبيب استشاري وخبير قراءة روشتات طبية متمكن من فك كل أشكال الخطوط السيئة، الشخبطة، الرموز المشوهة، والاختصارات الطبية اليدوية للأطباء.

المطلوب بدقة:
1. اقرأ الصورة بغض النظر عن اتجاهها (مقلوبة، رأسية، مائلة، أو أفقية).
2. استخرج **جميع** التحاليل الطبية والطلبات المخبرية المكتوبة في الصورة بلا استثناء حتى لو كانت مكتوبة بأحرف سريعة أو مقتضبة.
3. اكتب الاسم الطبي القياسي والشائع للتحليل بالإنجليزية (مع ذكر الاسم بالعربي إذا أمكن).
4. لا تتجاهل أي اختبار مكتوب حتى لو كان تحليلاً عاماً أو نادراً.

أمثلة من قاعدة البيانات المعيارية للمختبر:
${sampleKnownNames}

أعد المخرجات بصيغة JSON حصراً بدون أي نصوص قبلها أو بعدها:
{
  "detected_tests": [
    {
      "standard_name": "الاسم الطبي القياسي للتحليل بالإنجليزي أو العربي",
      "raw_text": "الرمز أو الكلمة كما ظهرت بالروشتة"
    }
  ]
}
`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: systemPrompt },
                        { inline_data: { mime_type: "image/jpeg", data: rawBase64 } }
                    ]
                }],
                generationConfig: {
                    response_mime_type: "application/json",
                    temperature: 0.1
                }
            })
        });

        const resData = await response.json();
        const outputJson = JSON.parse(resData.candidates[0].content.parts[0].text);
        const detectedList = outputJson.detected_tests || [];

        // منطق المطابقة الهجين (البحث في قاعدة DotCare أولاً، ثم التحويل التلقائي للتحاليل العامة)
        const finalResults = [];

        detectedList.forEach(item => {
            const queryName = item.standard_name || item.raw_text;
            
            // محاولة إيجاد تطابق داخل بنك DotCare
            const matchedDb = DOTCARE_EXTRA_TESTS.find(dbItem => 
                dbItem.test(queryName) || 
                (item.raw_text && dbItem.test(item.raw_text)) ||
                queryName.toLowerCase().includes(dbItem.name.toLowerCase())
            );

            if (matchedDb) {
                // وجد في DotCare
                if (!finalResults.some(r => r.name === matchedDb.name)) {
                    finalResults.push({
                        name: matchedDb.name,
                        notes: matchedDb.getNotes(),
                        source: 'dotcare'
                    });
                }
            } else {
                // غير موجود في بنك البيانات -> يتم إخراجه فوراً مع شروط عامة
                if (!finalResults.some(r => r.name.toLowerCase() === queryName.toLowerCase())) {
                    finalResults.push({
                        name: queryName,
                        notes: "سيرم / عينة عادية، لا توجد شروط تحضير خاصة أو صيام مسبق لهذا التحليل ما لم يطلب الطبيب المعالج غير ذلك.",
                        source: 'general'
                    });
                }
            }
        });

        renderPrescriptionResults(finalResults);

    } catch (err) {
        console.error("Prescription Scan Error:", err);
        alert("حدث خطأ أثناء فحص الروشتة. يرجى التحقق من صحة مفتاح API وجودة اتصال الإنترنت.");
    } finally {
        if (loadingElem) loadingElem.style.display = 'none';
    }
}

// ============================================================================
// عرض النتائج في واجهة المستخدم (UI Rendering)
// ============================================================================

function renderPrescriptionResults(matchedTests) {
    const resultsContainer = document.querySelector('.results') || document.querySelector('[class*="result"]') || document.getElementById('resultsContainer') || document.getElementById('results');
    if (!resultsContainer) return;

    resultsContainer.innerHTML = '';

    if (!matchedTests || matchedTests.length === 0) {
        resultsContainer.innerHTML = `
            <div style="padding: 16px; background: #fff3cd; color: #856404; border: 1px solid #ffeeba; border-radius: 8px; direction: rtl; text-align: right; font-family: inherit;">
                لم يتم رصد أي تحاليل واضحة في الروشتة. يرجى التأكد من تسليط الكاميرا على موضع الكتابة بوضوح.
            </div>
        `;
        return;
    }

    matchedTests.forEach(item => {
        const isDotcare = item.source === 'dotcare';
        const borderColor = isDotcare ? '#0d6efd' : '#198754';
        const badgeBg = isDotcare ? '#e7f1ff' : '#e8f5e9';
        const badgeColor = isDotcare ? '#0d6efd' : '#2e7d32';
        const badgeText = isDotcare ? 'معتمد في DotCare' : 'تحليل عام';

        const card = document.createElement('div');
        card.style.cssText = `
            background: #ffffff;
            border-right: 5px solid ${borderColor};
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.06);
            margin-bottom: 12px;
            padding: 14px 18px;
            direction: rtl;
            text-align: right;
            font-family: inherit;
        `;

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <h4 style="margin: 0; color: #1a252f; font-size: 1.05rem; font-weight: 600;">${item.name}</h4>
                <span style="background: ${badgeBg}; color: ${badgeColor}; font-size: 0.78rem; font-weight: bold; padding: 3px 9px; border-radius: 12px;">
                    ${badgeText}
                </span>
            </div>
            <p style="margin: 0; color: #495057; line-height: 1.6; font-size: 0.94rem;">
                <strong style="color: #2c3e50;">شروط التحضير:</strong> ${item.notes}
            </p>
        `;
        resultsContainer.appendChild(card);
    });
    }
